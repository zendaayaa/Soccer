// #!/usr/bin/env ts-node

// import * as fs from 'fs';
// import * as path from 'path';

// console.log('🚀 Aztec Sports Strapi Complete Generator (TypeScript)\n');

// // Check if we're in a Strapi project
// if (!fs.existsSync('package.json')) {
//   console.error('❌ Error: No package.json found. Are you in a Strapi project directory?');
//   process.exit(1);
// }

// const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
// if (!packageJson.dependencies || !packageJson.dependencies['@strapi/strapi']) {
//   console.error('❌ Error: This doesn\'t appear to be a Strapi project.');
//   console.error('   Please run this script from your Strapi project root directory.');
//   process.exit(1);
// }

// // Types
// interface ComponentSchema {
//   collectionName: string;
//   info: {
//     displayName: string;
//     description: string;
//   };
//   options: Record<string, unknown>;
//   attributes: Record<string, unknown>;
// }

// interface ContentTypeSchema {
//   kind: 'singleType' | 'collectionType';
//   collectionName: string;
//   info: {
//     singularName: string;
//     pluralName: string;
//     displayName: string;
//     description: string;
//   };
//   options: {
//     draftAndPublish: boolean;
//   };
//   pluginOptions: Record<string, unknown>;
//   attributes: Record<string, unknown>;
// }

// // Helper function to create directories recursively
// function ensureDirectoryExists(dirPath: string): void {
//   if (!fs.existsSync(dirPath)) {
//     fs.mkdirSync(dirPath, { recursive: true });
//     console.log(`✅ Created directory: ${dirPath}`);
//   }
// }

// // Helper function to write JSON file
// function writeJsonFile(filePath: string, data: unknown): void {
//   ensureDirectoryExists(path.dirname(filePath));
//   fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
//   console.log(`✅ Created: ${filePath}`);
// }

// // Helper function to write JS file
// function writeJsFile(filePath: string, content: string): void {
//   ensureDirectoryExists(path.dirname(filePath));
//   fs.writeFileSync(filePath, content);
//   console.log(`✅ Created: ${filePath}`);
// }

// // Generate controller file
// function generateController(singularName: string): string {
//   return `'use strict';

// /**
//  * ${singularName} controller
//  */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::${singularName}.${singularName}');
// `;
// }

// // Generate service file
// function generateService(singularName: string): string {
//   return `'use strict';

// /**
//  * ${singularName} service
//  */

// const { createCoreService } = require('@strapi/strapi').factories;

// module.exports = createCoreService('api::${singularName}.${singularName}');
// `;
// }

// // Generate routes file
// function generateRoutes(singularName: string): string {
//   return `'use strict';

// /**
//  * ${singularName} router
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::${singularName}.${singularName}');
// `;
// }

// // ==================== COMPONENTS ====================

// const components: Record<string, ComponentSchema> = {
//   'about/value': {
//     collectionName: 'components_about_values',
//     info: {
//       displayName: 'Value',
//       description: 'Core value item'
//     },
//     options: {},
//     attributes: {
//       icon: {
//         type: 'string',
//         required: true
//       },
//       title: {
//         type: 'string',
//         required: true
//       },
//       description: {
//         type: 'text',
//         required: true
//       }
//     }
//   },
//   'about/team-member': {
//     collectionName: 'components_about_team_members',
//     info: {
//       displayName: 'Team Member',
//       description: 'Team member details'
//     },
//     options: {},
//     attributes: {
//       name: {
//         type: 'string',
//         required: true
//       },
//       role: {
//         type: 'string',
//         required: true
//       },
//       image: {
//         type: 'media',
//         multiple: false,
//         required: true,
//         allowedTypes: ['images']
//       }
//     }
//   },
//   'about/stat': {
//     collectionName: 'components_about_stats',
//     info: {
//       displayName: 'Stat',
//       description: 'Statistics item'
//     },
//     options: {},
//     attributes: {
//       number: {
//         type: 'string',
//         required: true
//       },
//       label: {
//         type: 'string',
//         required: true
//       }
//     }
//   },
//   'contact/social-link': {
//     collectionName: 'components_contact_social_links',
//     info: {
//       displayName: 'Social Link',
//       description: 'Social media link'
//     },
//     options: {},
//     attributes: {
//       name: {
//         type: 'string',
//         required: true
//       },
//       url: {
//         type: 'string',
//         required: true
//       },
//       icon: {
//         type: 'text',
//         required: true
//       }
//     }
//   }
// };

// // ==================== CONTENT TYPES ====================

// const contentTypes: Record<string, ContentTypeSchema> = {
//   'about/about': {
//     kind: 'singleType',
//     collectionName: 'abouts',
//     info: {
//       singularName: 'about',
//       pluralName: 'abouts',
//       displayName: 'About',
//       description: 'About page content'
//     },
//     options: {
//       draftAndPublish: true
//     },
//     pluginOptions: {},
//     attributes: {
//       title: {
//         type: 'string',
//         required: true,
//         default: 'About Aztec Sports'
//       },
//       subtitle: {
//         type: 'string',
//         required: true
//       },
//       heroImage: {
//         type: 'media',
//         multiple: false,
//         required: true,
//         allowedTypes: ['images']
//       },
//       mission: {
//         type: 'text',
//         required: true
//       },
//       vision: {
//         type: 'text',
//         required: true
//       },
//       values: {
//         type: 'component',
//         repeatable: true,
//         component: 'about.value'
//       },
//       team: {
//         type: 'component',
//         repeatable: true,
//         component: 'about.team-member'
//       },
//       stats: {
//         type: 'component',
//         repeatable: true,
//         component: 'about.stat'
//       }
//     }
//   },
//   'announcement/announcement': {
//     kind: 'collectionType',
//     collectionName: 'announcements',
//     info: {
//       singularName: 'announcement',
//       pluralName: 'announcements',
//       displayName: 'Announcement',
//       description: 'News and announcements'
//     },
//     options: {
//       draftAndPublish: true
//     },
//     pluginOptions: {},
//     attributes: {
//       title: {
//         type: 'string',
//         required: true
//       },
//       excerpt: {
//         type: 'text',
//         required: true,
//         maxLength: 200
//       },
//       content: {
//         type: 'richtext',
//         required: true
//       },
//       category: {
//         type: 'enumeration',
//         enum: ['news', 'event', 'update', 'alert'],
//         default: 'news',
//         required: true
//       },
//       priority: {
//         type: 'enumeration',
//         enum: ['high', 'normal', 'low'],
//         default: 'normal',
//         required: true
//       },
//       featuredImage: {
//         type: 'media',
//         multiple: false,
//         required: false,
//         allowedTypes: ['images']
//       }
//     }
//   },
//   'contact-info/contact-info': {
//     kind: 'singleType',
//     collectionName: 'contact_infos',
//     info: {
//       singularName: 'contact-info',
//       pluralName: 'contact-infos',
//       displayName: 'Contact Info',
//       description: 'Contact information'
//     },
//     options: {
//       draftAndPublish: true
//     },
//     pluginOptions: {},
//     attributes: {
//       address: {
//         type: 'text',
//         required: true
//       },
//       phone: {
//         type: 'string',
//         required: true
//       },
//       email: {
//         type: 'email',
//         required: true
//       },
//       workingHours: {
//         type: 'string',
//         required: true
//       },
//       socialMedia: {
//         type: 'component',
//         repeatable: true,
//         component: 'contact.social-link'
//       }
//     }
//   },
//   'contact-submission/contact-submission': {
//     kind: 'collectionType',
//     collectionName: 'contact_submissions',
//     info: {
//       singularName: 'contact-submission',
//       pluralName: 'contact-submissions',
//       displayName: 'Contact Submission',
//       description: 'Contact form submissions'
//     },
//     options: {
//       draftAndPublish: false
//     },
//     pluginOptions: {},
//     attributes: {
//       name: {
//         type: 'string',
//         required: true
//       },
//       email: {
//         type: 'email',
//         required: true
//       },
//       phone: {
//         type: 'string'
//       },
//       subject: {
//         type: 'string',
//         required: true
//       },
//       message: {
//         type: 'text',
//         required: true
//       },
//       status: {
//         type: 'enumeration',
//         enum: ['new', 'read', 'replied'],
//         default: 'new'
//       }
//     }
//   },
//   'membership-plan/membership-plan': {
//     kind: 'collectionType',
//     collectionName: 'membership_plans',
//     info: {
//       singularName: 'membership-plan',
//       pluralName: 'membership-plans',
//       displayName: 'Membership Plan',
//       description: 'Membership plans and pricing'
//     },
//     options: {
//       draftAndPublish: true
//     },
//     pluginOptions: {},
//     attributes: {
//       name: {
//         type: 'string',
//         required: true
//       },
//       description: {
//         type: 'text',
//         required: true
//       },
//       icon: {
//         type: 'string',
//         required: true
//       },
//       price: {
//         type: 'string',
//         required: true
//       },
//       period: {
//         type: 'enumeration',
//         enum: ['month', 'quarter', 'year'],
//         default: 'month',
//         required: true
//       },
//       features: {
//         type: 'json',
//         required: true
//       },
//       buttonText: {
//         type: 'string',
//         default: 'Get Started'
//       },
//       featured: {
//         type: 'boolean',
//         default: false
//       },
//       order: {
//         type: 'integer',
//         default: 0
//       }
//     }
//   },
//   'match/match': {
//     kind: 'collectionType',
//     collectionName: 'matches',
//     info: {
//       singularName: 'match',
//       pluralName: 'matches',
//       displayName: 'Match',
//       description: 'Fixtures and results'
//     },
//     options: {
//       draftAndPublish: true
//     },
//     pluginOptions: {},
//     attributes: {
//       competition: {
//         type: 'string',
//         required: true
//       },
//       date: {
//         type: 'datetime',
//         required: true
//       },
//       venue: {
//         type: 'string',
//         required: true
//       },
//       homeTeamName: {
//         type: 'string',
//         required: true
//       },
//       homeTeamLogo: {
//         type: 'media',
//         multiple: false,
//         required: true,
//         allowedTypes: ['images']
//       },
//       homeTeamScore: {
//         type: 'integer'
//       },
//       awayTeamName: {
//         type: 'string',
//         required: true
//       },
//       awayTeamLogo: {
//         type: 'media',
//         multiple: false,
//         required: true,
//         allowedTypes: ['images']
//       },
//       awayTeamScore: {
//         type: 'integer'
//       },
//       status: {
//         type: 'enumeration',
//         enum: ['upcoming', 'live', 'completed', 'postponed', 'cancelled'],
//         default: 'upcoming',
//         required: true
//       },
//       matchReport: {
//         type: 'richtext'
//       },
//       highlights: {
//         type: 'string'
//       }
//     }
//   }
// };

// // ==================== GENERATE FILES ====================

// console.log('📝 Generating component schemas...\n');

// // Generate components
// Object.entries(components).forEach(([componentPath, schema]) => {
//   const filePath = path.join('src', 'components', componentPath + '.json');
//   writeJsonFile(filePath, schema);
// });

// console.log('\n📝 Generating content type schemas and API files...\n');

// // Generate content types with full API structure
// Object.entries(contentTypes).forEach(([apiPath, schema]) => {
//   const [apiName, singularName] = apiPath.split('/');
  
//   // Create schema
//   const schemaPath = path.join('src', 'api', apiName, 'content-types', singularName, 'schema.json');
//   writeJsonFile(schemaPath, schema);
  
//   // Create controller
//   const controllerPath = path.join('src', 'api', apiName, 'controllers', singularName + '.js');
//   writeJsFile(controllerPath, generateController(singularName));
  
//   // Create service
//   const servicePath = path.join('src', 'api', apiName, 'services', singularName + '.js');
//   writeJsFile(servicePath, generateService(singularName));
  
//   // Create routes
//   const routesPath = path.join('src', 'api', apiName, 'routes', singularName + '.js');
//   writeJsFile(routesPath, generateRoutes(singularName));
  
//   console.log(`   ✨ Complete API created for: ${singularName}\n`);
// });

// // ==================== CREATE README ====================

// const readmeContent = `# Aztec Sports CMS - Content Types

// This Strapi instance contains the following content types:

// ## Single Types (One entry)
// - **About** - About page information with mission, vision, team, and stats
// - **Contact Info** - Contact details and social media links

// ## Collection Types (Multiple entries)
// - **Announcements** - News, events, updates, and alerts
// - **Contact Submissions** - Form submissions from the contact page
// - **Membership Plans** - Membership tiers and pricing
// - **Matches** - Fixtures and results

// ## Components
// - **about.value** - Core values
// - **about.team-member** - Team member profiles
// - **about.stat** - Statistics display
// - **contact.social-link** - Social media links

// ## Next Steps

// 1. Start Strapi:
//    \`\`\`bash
//    npm run develop
//    # or
//    yarn develop
//    \`\`\`

// 2. Access admin panel: http://localhost:1337/admin

// 3. Create your first admin user (if you haven't already)

// 4. Set API Permissions:
//    - Go to Settings → Users & Permissions Plugin → Roles → Public
//    - You should now see all content types!
//    - Enable the following:
//      * About: find
//      * Announcement: find, findOne
//      * Contact-info: find
//      * Contact-submission: create
//      * Membership-plan: find, findOne
//      * Match: find, findOne

// 5. Add your content through the admin panel

// 6. Test API endpoints:
//    - http://localhost:1337/api/about?populate=deep
//    - http://localhost:1337/api/announcements
//    - http://localhost:1337/api/contact-info?populate=deep
//    - http://localhost:1337/api/membership-plans
//    - http://localhost:1337/api/matches?populate=*

// ## File Structure Created

// \`\`\`
// src/
// ├── api/
// │   ├── about/
// │   │   ├── content-types/about/schema.json
// │   │   ├── controllers/about.js
// │   │   ├── services/about.js
// │   │   └── routes/about.js
// │   ├── announcement/
// │   │   ├── content-types/announcement/schema.json
// │   │   ├── controllers/announcement.js
// │   │   ├── services/announcement.js
// │   │   └── routes/announcement.js
// │   ├── contact-info/
// │   ├── contact-submission/
// │   ├── membership-plan/
// │   └── match/
// └── components/
//     ├── about/
//     │   ├── value.json
//     │   ├── team-member.json
//     │   └── stat.json
//     └── contact/
//         └── social-link.json
// \`\`\`

// ## Sample Data Examples

// ### Membership Plan Features (JSON field):
// \`\`\`json
// [
//   "2 training sessions per week",
//   "Access to basic facilities",
//   "Group training only",
//   "Basic equipment usage",
//   "Monthly progress report"
// ]
// \`\`\`

// ### Social Media Icon (SVG):
// Use the SVG icons from Font Awesome, Heroicons, or your preferred icon library.

// ## Troubleshooting

// ### Content types not showing in Roles & Permissions?
// - Make sure you've restarted Strapi completely
// - Check the terminal for any error messages
// - Verify all files were created correctly
// - Try rebuilding: \`npm run build\` or \`yarn build\`

// ### Database issues?
// Your SQLite database is located at: \`.tmp/data.db\`
// If you need to start fresh:
// 1. Stop Strapi
// 2. Delete \`.tmp/data.db\`
// 3. Restart Strapi

// ## Backup Your Data
// Make sure to backup your \`.tmp/data.db\` file regularly!
// `;

// fs.writeFileSync('CMS_README.md', readmeContent);
// console.log('✅ Created: CMS_README.md');

// console.log('\n✨ Schema generation complete!\n');
// console.log('📋 Summary:');
// console.log(`   • ${Object.keys(components).length} components created`);
// console.log(`   • ${Object.keys(contentTypes).length} content types created`);
// console.log(`   • ${Object.keys(contentTypes).length * 3} API files created (controllers, services, routes)`);
// console.log(`   • README file created\n`);
// console.log('🎯 Next steps:');
// console.log('   1. Run: npm run develop (or yarn develop)');
// console.log('   2. Open: http://localhost:1337/admin');
// console.log('   3. The content types should now appear in Roles & Permissions!');
// console.log('   4. Set API permissions (see CMS_README.md)');
// console.log('   5. Add your content!\n');
// console.log('💡 Tip: Check CMS_README.md for detailed instructions\n');