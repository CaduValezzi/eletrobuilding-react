export type FooterColumnItem = {
  label: string;
  href?: string;
};

export type FooterColumnProps = {
  title: string;
  items: FooterColumnItem[];
};
