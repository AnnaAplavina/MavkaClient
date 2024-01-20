import axios from 'axios';

// const SERVER_ADDRESS = process.env.SERVER_ADDRESS;
// const SERVER_ADDRESS = "http://192.168.31.23:80"
const SERVER_ADDRESS = "http://api.imworse.space";
const TEST_RUN = true;

export function getAddress() {
  return SERVER_ADDRESS;
}

export async function getWallById(wallId : string) : Promise<any> {
    if (TEST_RUN) {
        let data = [{
            wall_id: "0",
            title: "title 0",
            image_url: "https://upload.wikimedia.org/wikipedia/ru/1/14/%D0%9D%D0%BE%D1%80%D1%82%D0%BE%D0%BD%2C-%D0%9F%D0%B8%D1%82%D1%82-%28%D0%91%D0%BE%D0%B9%D1%86%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BB.jpg",
            description: "description 0",
            owner_id: "0",
            creator_id: "0",
            is_available: true,
            category_id: "0",
            created_at: "2027-07-27"
        }]
        if (data.length < parseInt(wallId)) {
            return data[0];
        }
        return data[parseInt(wallId)];
    }

    const apiUrl = `${SERVER_ADDRESS}/walls/info`;
    await axios.get(apiUrl, {
      params: {
        wall_id: wallId,
        is_available: true
      }
    })
    .then(response => {
        console.log(response.data);
        return {
            wall_id: response.data.wall_id,
            title: response.data.title,
            image_url: response.data.image_url,
            description: response.data.description,
            owner_id: response.data.owner_id,
            creator_id: response.data.creator_id,
            is_available: response.data.is_available,
            category_id: response.data.category_id,
            created_at: response.data.created_at
        };
    })
    .catch(error => {
        console.error(error);
    });
    return {
      is_available: false
    };
}


export async function getUniqueWall(wallId : string, userId: string) : Promise<any> {
    const apiUrl = `${SERVER_ADDRESS}/walls/find_unique`; //TODO Refactor Backend SQL Query and Following Frontend
    await axios.get(apiUrl, {
        params: {
            wall_id: wallId,
            user_id: userId
        }
    })
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error(error);
    });
}


export async function getWallsByUser(userId : number | string) {
    const apiUrl = `${SERVER_ADDRESS}/walls/all`;
    const resp = await axios.get(apiUrl, {
      params: {
          user_id: userId
      }
  })
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error(error);
    });
    return resp;
}


export async function getAllWalls() {
    const apiUrl = `${SERVER_ADDRESS}/walls/all`;
    const resp = await axios.get(apiUrl)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error(error);
    });
    return resp;
}


export async function getWallsByIdAndAdmin(admin_id : string, wall_id: string) : Promise<any> {
  const apiUrl = `${SERVER_ADDRESS}/walls/info`;
  const resp = await axios.get(apiUrl, {
      params: {
          admin_id: admin_id,
          wall_id: wall_id
      }
  })
  .then(response => {
      return response.data;
  })
  .catch(error => {
      console.error(error);
  });
  return resp;
}


export async function searchWalls(title?:string, categoryId?:string) : Promise<any> {
  const apiUrl = `${SERVER_ADDRESS}/walls/all`;
  const resp = await axios.get(apiUrl, {
      params: {
          title: title,
          category_id: categoryId
      }
  })
  .then(response => {
      return response.data;
  })
  .catch(error => {
      console.error(error);
  });
  return resp;
}


export async function getAttachmentsByWall(wallId: string) : Promise<any> {
  const apiUrl = `${SERVER_ADDRESS}/walls/attachments`;
  const resp = await axios.get(apiUrl, {
      params: {
          wall_id: wallId
      }
  })
  .then(response => {
      return response.data;
  })
  .catch(error => {
      console.error(error);
  });
  return resp;
}


export async function checkIsMember({userId, wallId} : {userId:string, wallId:string}) {
    const apiUrl = `${SERVER_ADDRESS}/users/wall_info`;
    await axios.get(apiUrl, {
      params: {
        student_id: userId,
        wall_id: wallId
      }
    })
    .then(response => {
        console.log(response.data);
        return response.data.is_member;
    })
    .catch(error => {
        console.error(error);
    });
    return false;
}


export async function getWallPostById({wallPostId} : {wallPostId:string}) {
  const apiUrl = `${SERVER_ADDRESS}/wall_posts/info`;
    await axios.get(apiUrl, {
      params: {
        wall_post_id: wallPostId,
        is_available: true
      }
    })
    .then(response => {
        console.log(response.data);
        return {
          wall_post_id: response.data.wall_post_id,
          wall_post_name: response.data.wall_post_name,
          wall_post_description: response.data.wall_post_description,
          wall_post_text: response.data.wall_post_text,
          is_available: response.data.is_available,
          is_preview: response.data.is_preview,
          position: response.data.position,
          wall_id: response.data.wall_id,
          created_at: response.data.created_at
      };
    })
    .catch(error => {
        console.error(error);
    });
    return {
      is_available: false,
      is_preview: false,
      position: "-1"
    };
}


export async function getWallPostByPosition({wallId, position} : {wallId:string, position:string}) {
  const apiUrl = `${SERVER_ADDRESS}/wall_posts/wall_post`;
    position = String(parseInt(position) + 1);
    await axios.get(apiUrl, {
      params: {
        wall_id: wallId,
        position: position
      }
    })
    .then(response => {
        console.log(response.data);
        return {
          wall_post_id: response.data.wall_post_id,
          wall_post_name: response.data.wall_post_name,
          wall_post_description: response.data.wall_post_description,
          wall_post_text: response.data.wall_post_text,
          is_available: response.data.is_available,
          is_preview: response.data.is_preview,
          position: response.data.position,
          wall_id: response.data.wall_id,
          created_at: response.data.created_at
      };
    })
    .catch(error => {
        console.error(error);
    });
    return null;
}


export async function getAttachments({wallPostId} : {wallPostId:string}) {
  const apiUrl = `${SERVER_ADDRESS}/wall_posts/attachments`;
    await axios.get(apiUrl, {
      params: {
        wall_post_id: wallPostId,
        is_available: true
      }
    })
    .then(response => {
        console.log(response.data);
        return response.data;
    })
    .catch(error => {
        console.error(error);
    });
    return [];
}



export async function getWallPosts(wallId : string) : Promise<any> {
  const apiUrl = `${SERVER_ADDRESS}/wall_posts/all`;
  const resp = await axios.get(apiUrl, {
      params: {
          wall_id: wallId
      }
  })
  .then(response => {
      return response.data;
  })
  .catch(error => {
      console.error(error);
  });
  return resp;
}


export async function getNumberOfCompletedWallPosts(userId : string, wallPostsIds: string[]) : Promise<any> {
  const apiUrl = `${SERVER_ADDRESS}/wall_posts/count_completed`;
  await axios.get(apiUrl, {
      params: {
          user_id: userId,
          wall_post_ids: wallPostsIds
      }
  })
  .then(response => {
      return response.data;
  })
  .catch(error => {
      console.error(error);
  });
}


export async function getWallPostByIdAndWall(wall_id: string, wall_post_id: string) : Promise<any> {
  const apiUrl = `${SERVER_ADDRESS}/wall_posts/by_id_and_wall`;
  await axios.get(apiUrl, {
      params: {
          wall_post_id: wall_post_id,
          wall_id: wall_id
      }
  }).then(response => {
      return response.data;
  })
  .catch(error => {
      console.error(error);
  });
}


export async function getGroupedWallsByAdmin(adminId : string) : Promise<any> {
  const apiUrl = `${SERVER_ADDRESS}/analytics/group_by_admin`;
  await axios.get(apiUrl, {
      params: {
        admin_id: adminId
      }
  })
  .then(response => {
      return response.data;
  })
  .catch(error => {
      console.error(error);
  });
}


export async function getCategories() : Promise<any> {
  const apiUrl = `${SERVER_ADDRESS}/users/categories/all`;
  const resp = await axios.get(apiUrl)
  .then(response => {
      return response.data
  })
  .catch(error => {
      console.error(error);
  });
  return resp;
}


export async function getNews() {
  const apiUrl = `${SERVER_ADDRESS}/news`;
  const resp = await axios.get(apiUrl)
  .then(response => {
      return response.data
  })
  .catch(error => {
      console.error(error);
  });
  return resp;
}


export async function getUserSub() {
    return null;
}


export async function getUserFeedback() {
    return null;
}

export async function getDashboardWalls(userId: string) {
    const recommendedWalls = [{
        wall_id: "0",
        title: "title 0",
        image_url: "https://upload.wikimedia.org/wikipedia/ru/1/14/%D0%9D%D0%BE%D1%80%D1%82%D0%BE%D0%BD%2C-%D0%9F%D0%B8%D1%82%D1%82-%28%D0%91%D0%BE%D0%B9%D1%86%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BB.jpg",
        description: "description 0",
        owner_id: "0",
        admin_id: "0",
        is_available: true,
        category_id: "0",
        created_at: "2027-07-27",
        category: null, 
        wall_posts: [{id: 0}, {id: 1}]}];
    const subbedWalls = [{
        wall_id: "0",
        title: "title 0",
        image_url: "https://upload.wikimedia.org/wikipedia/ru/1/14/%D0%9D%D0%BE%D1%80%D1%82%D0%BE%D0%BD%2C-%D0%9F%D0%B8%D1%82%D1%82-%28%D0%91%D0%BE%D0%B9%D1%86%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BB.jpg",
        description: "description 0",
        owner_id: "0",
        admin_id: "0",
        is_available: true,
        category_id: "0",
        created_at: "2027-07-27",
        category: null, 
        wall_posts: [{id: 0}, {id: 1}]}];
    return { recommendedWalls, subbedWalls };
}