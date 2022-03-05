export interface BMFooterProps {
    columns         :Array<Columns>;
    bottomtext      :string;
}

export interface Columns {
    image?          :string;
    paragraphs      :Array<string>;
}
