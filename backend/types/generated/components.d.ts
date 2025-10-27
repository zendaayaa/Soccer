import type { Schema, Struct } from '@strapi/strapi';

export interface AboutStat extends Struct.ComponentSchema {
  collectionName: 'components_about_stats';
  info: {
    displayName: 'stat';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    number: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_about_team_members';
  info: {
    displayName: 'team-member';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutValue extends Struct.ComponentSchema {
  collectionName: 'components_about_values';
  info: {
    displayName: 'value';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_contact_social_links';
  info: {
    displayName: 'social link';
  };
  attributes: {
    icon: Schema.Attribute.Text & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.stat': AboutStat;
      'about.team-member': AboutTeamMember;
      'about.value': AboutValue;
      'contact.social-link': ContactSocialLink;
    }
  }
}
