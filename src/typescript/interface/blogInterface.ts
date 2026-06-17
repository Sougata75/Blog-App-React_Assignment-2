export interface DataType{
     id: string,
     user_id: string,
     title: string,
     subtitle: string,
     summary: string,
     category: string,
     featured_image: string,
     main_content: string,
     created_at: string,
     updated_at: string,
     user: User,
     comments?: Comments[],
     tags?: Tags[]
}

export interface User {

       id: string,
       first_name: string,
       middle_name: string,
       last_name: string,
      email: string,
      contact_id: string,
      address_id: string,
      username: string,
      role: string,
      profile_pic: string,
      email_verified_at: null,
      created_at: string,
      updated_at: string  
}

export interface Comments {
        id: string,
        user_id: string,
        blog_post_id: string,
        main_content: string,
        created_at: string,
        updated_at: string,
      }

export interface Tags {
        id: string,
        blog_post_id: string,
        name: string,
        created_at: string,
        updated_at: string
      }

export interface Reviews {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}