declare namespace SearchAPI {
  export interface Response {
    total: number;
    total_pages: number;
    results: Result[];
  }

  export interface Result {
    id: string;
    slug: string;
    alternative_slugs: AlternativeSlugs;
    created_at: string;
    updated_at: string;
    promoted_at?: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description?: string;
    alt_description: string;
    breadcrumbs: Breadcrumb[];
    urls: Urls;
    links: Links;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship: any;
    topic_submissions: TopicSubmissions;
    asset_type: string;
    user: User;
    tags: Tag[];
  }

  export interface Urls {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
    small_s3: string
  }
}
