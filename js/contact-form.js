(function () {
    "use strict";

    var API_URL = "/api/contact";

    function getField(form, names) {
        for (var i = 0; i < names.length; i++) {
            var el = form.querySelector('[name="' + names[i] + '"]');
            if (el) return el;
        }
        return null;
    }

    function setStatus(statusEl, type, message) {
        statusEl.textContent = message;
        statusEl.className = "cta-form__status" + (type ? " cta-form__status--" + type : "");
    }

    function validateForm(form) {
        var nameEl = getField(form, ["name"]);
        var emailEl = getField(form, ["email"]);
        var typeEl = getField(form, ["type"]);

        if (nameEl && !nameEl.value.trim()) return "Vui lòng nhập tên / công ty.";
        if (emailEl && !emailEl.value.trim()) return "Vui lòng nhập email.";
        if (emailEl && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
            return "Email không hợp lệ.";
        }
        if (typeEl && typeEl.hasAttribute("required") && !typeEl.value) {
            return "Vui lòng chọn loại công việc.";
        }
        return null;
    }

    function addHoneypot(form) {
        if (form.querySelector('[name="botcheck"]')) return;
        var honeypot = document.createElement("input");
        honeypot.type = "text";
        honeypot.name = "botcheck";
        honeypot.tabIndex = -1;
        honeypot.autocomplete = "off";
        honeypot.setAttribute("aria-hidden", "true");
        honeypot.style.cssText = "position:absolute;left:-9999px;width:0;height:0;opacity:0;pointer-events:none;";
        form.appendChild(honeypot);
    }

    function collectPayload(form) {
        var nameEl = getField(form, ["name"]);
        var emailEl = getField(form, ["email"]);
        var typeEl = getField(form, ["type"]);
        var msgEl = getField(form, ["message"]);
        var botEl = form.querySelector('[name="botcheck"]');

        return {
            name: nameEl ? nameEl.value.trim() : "",
            email: emailEl ? emailEl.value.trim() : "",
            type: typeEl ? typeEl.value : "",
            message: msgEl ? msgEl.value.trim() : "",
            botcheck: botEl ? botEl.value : ""
        };
    }

    function initForm(form) {
        if (form.dataset.contactBound === "true") return;
        form.dataset.contactBound = "true";
        addHoneypot(form);

        var statusEl = document.createElement("p");
        statusEl.className = "cta-form__status";
        statusEl.setAttribute("role", "status");
        statusEl.setAttribute("aria-live", "polite");
        form.appendChild(statusEl);

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            var validationError = validateForm(form);
            if (validationError) {
                setStatus(statusEl, "error", validationError);
                return;
            }

            var submitBtn = form.querySelector('[type="submit"]');
            var label = submitBtn ? submitBtn.innerHTML : "";
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.setAttribute("aria-busy", "true");
            }
            setStatus(statusEl, null, "Đang gửi…");

            fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(collectPayload(form))
            })
                .then(function (res) {
                    return res.json().then(function (data) {
                        return { ok: res.ok, data: data };
                    });
                })
                .then(function (result) {
                    if (result.ok && result.data.success) {
                        setStatus(
                            statusEl,
                            "success",
                            "Đã gửi thành công. Mình sẽ phản hồi trong vòng 24 giờ."
                        );
                        form.reset();
                        return;
                    }
                    throw new Error(
                        (result.data && result.data.message) || "Gửi thất bại"
                    );
                })
                .catch(function () {
                    setStatus(
                        statusEl,
                        "error",
                        "Không gửi được lúc này. Thử lại hoặc email trực tiếp: vy.nguyentrucmai@gmail.com"
                    );
                })
                .finally(function () {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.removeAttribute("aria-busy");
                        submitBtn.innerHTML = label;
                    }
                });
        });
    }

    document.querySelectorAll("#ctaForm").forEach(initForm);
})();
