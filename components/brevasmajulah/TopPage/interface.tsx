export interface TopPageProps {
    links       :TopPageSocialLinks
    contacts    :TopPageContactLinks;
}

export interface TopPageSocialLinks {
    facebook?    :string;
    instagram?   :string;
    linkedin?    :string;
}

export interface TopPageContactLinks {
    email?          :string;
    emailtext?      :string;
    phone?          :number | string;
    phonestext?     :string;
}
