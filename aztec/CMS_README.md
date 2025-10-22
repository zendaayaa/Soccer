# Aztec Sports CMS - Content Types

This Strapi instance contains the following content types:

## Single Types (One entry)
- **About** - About page information with mission, vision, team, and stats
- **Contact Info** - Contact details and social media links

## Collection Types (Multiple entries)
- **Announcements** - News, events, updates, and alerts
- **Contact Submissions** - Form submissions from the contact page
- **Membership Plans** - Membership tiers and pricing
- **Matches** - Fixtures and results

## Components
- **about.value** - Core values
- **about.team-member** - Team member profiles
- **about.stat** - Statistics display
- **contact.social-link** - Social media links

## Next Steps

1. Start Strapi:
   ```bash
   npm run develop
   # or
   yarn develop
   ```

2. Access admin panel: http://localhost:1337/admin

3. Set API Permissions:
   - Go to Settings → Users & Permissions Plugin → Roles → Public
   - Enable the following:
     * About: find
     * Announcement: find, findOne
     * Contact-info: find
     * Contact-submission: create
     * Membership-plan: find, findOne
     * Match: find, findOne

4. Add your content through the admin panel

5. Test API endpoints:
   - http://localhost:1337/api/about?populate=deep
   - http://localhost:1337/api/announcements
   - http://localhost:1337/api/contact-info?populate=deep
   - http://localhost:1337/api/membership-plans
   - http://localhost:1337/api/matches?populate=*

## Sample Data Examples

### Membership Plan Features (JSON field):
```json
[
  "2 training sessions per week",
  "Access to basic facilities",
  "Group training only",
  "Basic equipment usage",
  "Monthly progress report"
]
```

### Social Media Icon (SVG):
Use the SVG icons from Font Awesome, Heroicons, or your preferred icon library.

## Backup Your Data
Your SQLite database is located at: `.tmp/data.db`
Make sure to backup this file regularly!
