import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsHero extends Struct.ComponentSchema {
  collectionName: 'components_about_us_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    ImgHero: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Schema.Attribute.String;
  };
}

export interface AboutUsMissionStatment extends Struct.ComponentSchema {
  collectionName: 'components_about_us_mission_statments';
  info: {
    displayName: 'missionStatment';
  };
  attributes: {
    descriptionStatement: Schema.Attribute.Text;
    headingStatment: Schema.Attribute.String;
    imgStatment: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface AboutUsOurStory extends Struct.ComponentSchema {
  collectionName: 'components_about_us_our_stories';
  info: {
    displayName: 'ourStory';
  };
  attributes: {
    descriptionOurStory: Schema.Attribute.String;
    descriptiontwoOurStory: Schema.Attribute.Text;
    headingOurStory: Schema.Attribute.String;
    imgOurStory: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface AboutUsOurValue extends Struct.ComponentSchema {
  collectionName: 'components_about_us_our_values';
  info: {
    displayName: 'ourValue';
  };
  attributes: {
    descriptionValue: Schema.Attribute.String;
    imgValue: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface FaqHero extends Struct.ComponentSchema {
  collectionName: 'components_faq_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface HomeClientsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_home_clients_testimonials';
  info: {
    displayName: 'clientsTestimonial';
  };
  attributes: {
    heading: Schema.Attribute.String;
    testimonialCard: Schema.Attribute.Component<'home.testimonial-card', true>;
  };
}

export interface HomeHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {};
}

export interface HomeHowWeWork extends Struct.ComponentSchema {
  collectionName: 'components_home_how_we_works';
  info: {
    displayName: 'howWeWork';
  };
  attributes: {
    description: Schema.Attribute.Text;
    descriptiontwo: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    lineOne: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    lineTwo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    one: Schema.Attribute.String;
    oneIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    three: Schema.Attribute.String;
    threeDescription: Schema.Attribute.Text;
    threeIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    threeTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titletwo: Schema.Attribute.String;
    two: Schema.Attribute.String;
    twoIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeJoinUs extends Struct.ComponentSchema {
  collectionName: 'components_home_joinuses';
  info: {
    displayName: 'joinUs';
  };
  attributes: {
    bgImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Schema.Attribute.String;
  };
}

export interface HomePointerWhyOutsoutcing extends Struct.ComponentSchema {
  collectionName: 'components_home_pointer_why_outsoutcings';
  info: {
    displayName: 'pointerWhyOutsoutcing';
  };
  attributes: {
    imgPoinerWhyOutsoutcing: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    pointerTextWhyOutsoutcing: Schema.Attribute.String;
  };
}

export interface HomeService extends Struct.ComponentSchema {
  collectionName: 'components_home_services';
  info: {
    displayName: 'service';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    serviceCard: Schema.Attribute.Component<'home.service-card', true>;
  };
}

export interface HomeServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_home_service_cards';
  info: {
    displayName: 'serviceCard';
  };
  attributes: {
    buttontxtServiceCard: Schema.Attribute.String;
    descriptionServiceCard: Schema.Attribute.Text;
    imgServiceCard: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    pglink: Schema.Attribute.String;
    titleServiceCard: Schema.Attribute.String;
  };
}

export interface HomeTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonial_cards';
  info: {
    displayName: 'testimonialCard';
  };
  attributes: {
    testimonialBgImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    testimonialDescription: Schema.Attribute.String;
    testimonialPersonImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    testimonialPersonName: Schema.Attribute.String;
    testimonialTitle: Schema.Attribute.String;
  };
}

export interface HomeWhyOutsoutcing extends Struct.ComponentSchema {
  collectionName: 'components_home_why_outsoutcings';
  info: {
    displayName: 'whyOutsoutcing';
  };
  attributes: {
    descriptionWhyOutsoutcing: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    imgtwoWhyOutsoutcing: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    imgWhyOutsoutcing: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    pointerWhyOutsoutcing: Schema.Attribute.Component<
      'home.pointer-why-outsoutcing',
      true
    >;
  };
}

export interface SharedHeroHomepageCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_homepage_cards';
  info: {
    displayName: 'heroHomepageCards';
  };
  attributes: {
    content: Schema.Attribute.Text;
    imgComponent: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Card: Schema.Attribute.Component<'shared.hero-homepage-cards', true>;
    descriptionHeroHomepage: Schema.Attribute.Text;
    descriptionHeroHomePageTwo: Schema.Attribute.Text;
    freeConsultation: Schema.Attribute.String;
    freeConsultationImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    headingEndText: Schema.Attribute.String;
    headingFirstText: Schema.Attribute.String;
    headingMiddleText: Schema.Attribute.String;
    title: Schema.Attribute.String;
    ukFlage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.hero': AboutUsHero;
      'about-us.mission-statment': AboutUsMissionStatment;
      'about-us.our-story': AboutUsOurStory;
      'about-us.our-value': AboutUsOurValue;
      'faq.hero': FaqHero;
      'home.clients-testimonial': HomeClientsTestimonial;
      'home.hero-section': HomeHeroSection;
      'home.how-we-work': HomeHowWeWork;
      'home.join-us': HomeJoinUs;
      'home.pointer-why-outsoutcing': HomePointerWhyOutsoutcing;
      'home.service': HomeService;
      'home.service-card': HomeServiceCard;
      'home.testimonial-card': HomeTestimonialCard;
      'home.why-outsoutcing': HomeWhyOutsoutcing;
      'shared.hero-homepage-cards': SharedHeroHomepageCards;
      'shared.hero-section': SharedHeroSection;
    }
  }
}
