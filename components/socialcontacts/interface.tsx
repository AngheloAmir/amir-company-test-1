export interface SocialContactsProps {
    links       :SocialLinks
    contacts    :ContactLinks;
}

export interface SocialLinks {
    facebook?    :string;
    instagram?   :string;
    linkedin?    :string;
}

export interface ContactLinks {
    email?          :string;
    emailtext?      :string;
    phone?          :number | string;
    phonestext?     :string;
}
