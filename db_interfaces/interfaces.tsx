export interface WallContent {
    wall_id: string;
    title: string;
    image_url: string;
    description: string;
    admin_id: string;
    owner_id: string;
    is_available: string;
    category_id: string;
    created_at: string;
}

export interface WallPostContent {
    wall_post_id: string;
    wall_post_name: string;
    wall_post_description: string;
    wall_post_text: string;
    is_available: string;
    is_preview: string;
    position: string;
    wall_id: string;
    created_at: string;
} 

export interface AttachmentContent {
    id: string;
    name: string;
    url: string;
    type: string;
    created_at: string;
    wall_post_by: string;
}

export interface ProgressContent {
    id: string;
    user_id: string;
    wall_post_id: string;
    is_completed: string;
    created_at: string;
}

export interface CategoryContent {
    id: string;
    name: string;
}