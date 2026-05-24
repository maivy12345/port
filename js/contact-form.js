(function () {
    "use strict";

    var WEB3FORMS_URL = "https://api.web3forms.com/submit";

    function getAccessKey() {
        return String(window.WEB3FORMS_ACCESS_KEY || "").trim();
    }

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

        if (nameEl && !nameEl.value.trim()) return "Please enter your name / company.";
        if (emailEl && !emailEl.value.trim()) return "Please enter your email.";
        if (emailEl && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
            return "Invalid email address.";
        }
        if (typeEl && typeEl.hasAttribute("required") && !typeEl.value) {
            return "Please select a work type.";
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
        honeypot.style.cssText =
            "position:absolute;left:-9999px;width:0;height:0;opacity:0;pointer-events:none;";
        form.appendChild(honeypot);
    }

    function collectPayload(form) {
        var nameEl = getField(form, ["name"]);
        var emailEl = getField(form, ["email"]);
        var typeEl = getField(form, ["type"]);
        var msgEl = getField(form, ["message"]);
        var botEl = form.querySelector('[name="botcheck"]');
        var name = nameEl ? nameEl.value.trim() : "";
        var email = emailEl ? emailEl.value.trim() : "";
        var type = typeEl ? typeEl.value : "";
        var message = msgEl ? msgEl.value.trim() : "";

        if (botEl && botEl.value) {
            return { botcheck: true };
        }

        var subject = "Portfolio contact";
        if (type) subject += " – " + type;

        return {
            access_key: getAccessKey(),
            subject: subject,
            name: name,
            email: email,
            replyto: email,
            work_type: type || undefined,
            message: message || "(no message)"
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

            var accessKey = getAccessKey();
            if (!accessKey) {
                setStatus(
                    statusEl,
                    "error",
                    "Form not configured. Email directly: vy.nguyentrucmai@gmail.com"
                );
                return;
            }

            var submitBtn = form.querySelector('[type="submit"]');
            var label = submitBtn ? submitBtn.innerHTML : "";
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.setAttribute("aria-busy", "true");
            }
            setStatus(statusEl, null, "Sending...");

            var payload = collectPayload(form);
            if (payload.botcheck) {
                setStatus(statusEl, "success", "Message sent successfully. I'll get back to you within 24 hours.");
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.removeAttribute("aria-busy");
                }
                return;
            }

            fetch(WEB3FORMS_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(payload)
            })
                .then(function (res) {
                    return res.json().then(function (data) {
                        return { ok: res.ok, data: data };
                    });
                })
                .then(function (result) {
                    if (result.ok && result.data && result.data.success) {
                        setStatus(
                            statusEl,
                            "success",
                            "Message sent successfully. I'll get back to you within 24 hours."
                        );
                        form.reset();
                        return;
                    }
                    var msg =
                        (result.data && (result.data.message || result.data.body)) ||
                        "Failed to send";
                    throw new Error(msg);
                })
                .catch(function (err) {
                    var detail = err && err.message ? " " + err.message : "";
                    setStatus(
                        statusEl,
                        "error",
                        "Couldn't send right now." +
                            detail +
                            " Try again or email: vy.nguyentrucmai@gmail.com"
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
