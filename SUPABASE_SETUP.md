# Supabase setup for content + images

## 1) Create schema and policies

1. Open Supabase dashboard -> SQL Editor.
2. Run file `supabase/setup.sql`.

## 2) Add configuration to website

1. Open `js/supabase-config.js`.
2. Replace:
   - `url` with your Supabase Project URL
   - `anonKey` with your Supabase anon public key
3. Keep `projectImagesBucket` as `project-images` unless you changed bucket name.

## 3) Upload images

1. Go to Storage -> bucket `project-images`.
2. Upload project images (ex: `projects/one-ibc/cover.jpg`).
3. Save image path into `projects.card_image` or `projects.hero_image`.
   - You can store full URL or relative path in bucket.

## 4) Add project content

Insert rows into table `public.projects`.

Required fields:
- `slug` (unique, ex: `one-ibc-app`)
- `title`

Common fields:
- `industry`, `tags`, `categories`
- `card_image`, `hero_image`
- `client_name`, `role`, `deliverables`
- `detail_overview`, `context_paragraph_1`, `context_paragraph_2`
- `context_bullets`, `results`, `reflection`
- `sort_order`, `is_published`

`results` JSON example:

```json
[
  { "value": "+42", "unit": "%", "description": "Booking completion rate" },
  { "value": "-3.2", "unit": "min", "description": "Average time to find a doctor" }
]
```

## 5) Data flow in current code

- `js/supabase-content.js`: connect Supabase + fetch table data
- `js/projects-data.js`: load from Supabase, fallback to local data if empty/error
- `js/works-page.js`: render project list
- `js/work-detail-page.js`: render project detail by `?slug=...`

## 6) Important note

Current setup is **public read only** for frontend (safe for static site).
For creating/updating/deleting content, do it via Supabase dashboard (Table Editor/Storage) or your own protected admin backend.
