export interface NavigationBarProps {
    branding :BrandingProps;
    navitems :NavItemsInterface;
    
}

export interface BrandingProps {
    brandname   :string;
    brandtitle  :string;
}

export interface NavItemsInterface {
    items     :Array<NavItem>;
}

export interface NavItem {
    name       :string;
    link       :string;
}
