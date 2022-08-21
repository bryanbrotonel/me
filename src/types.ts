import * as CFRichTextTypes from '@contentful/rich-text-types';
import * as Contentful from 'contentful';

export interface TypeBlurbFields {
  title?: Contentful.EntryFields.Symbol;
  content?: Contentful.EntryFields.Text;
}

export type TypeBlurb = Contentful.Entry<TypeBlurbFields>;

export interface TypeMastheadFields {
  title?: Contentful.EntryFields.Text;
  image?: Contentful.Asset;
  blurb?: Contentful.EntryFields.Symbol;
  aboutParagraph?: Contentful.EntryFields.Text;
  logo?: Contentful.Asset;
}

export type TypeMasthead = Contentful.Entry<TypeMastheadFields>;

export interface TypeWorkItemFields {
  title: Contentful.EntryFields.Symbol;
  subtitle?: Contentful.EntryFields.Symbol;
  websiteLink?: Contentful.EntryFields.Symbol;
  sourceLink?: Contentful.EntryFields.Symbol;
  blurb?: Contentful.EntryFields.Text;
  content?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  coverImage?: Contentful.Asset;
  order?: Contentful.EntryFields.Integer;
}

export type TypeWorkItem = Contentful.Entry<TypeWorkItemFields>;
