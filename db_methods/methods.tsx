import useToken from '@/app/useToken';
import { UserContent, WallPostContent } from '@/db_interfaces/interfaces';
import axios from 'axios';

// const SERVER_ADDRESS = process.env.SERVER_ADDRESS;
// const SERVER_ADDRESS = "http://192.168.31.23:80"
const SERVER_ADDRESS = "http://api.imworse.space";
const TEST_RUN = true;
const TEST_NODE_RUN = true;

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNzA2MzI2NTQ3LCJleHAiOjE3MDY0MTI5NDd9.ZvTkzsvqXFZ5o2sb34F7SKv47YEeIQam9l-gRbUAfxM    ";
// const { setToken, token, removeToken, userId } = useToken();
// const token = localStorage.getItem('token');

export function getAddress() {
  return SERVER_ADDRESS;
}

const testWalls = [
    {
        wall_id: "0",
        title: "Я Тайлер",
        image_url: "https://media.tatler.ru/photos/619795a8c2aa8983556eaf97/3:2/w_656,h_437,c_limit/327893448828.jpg",
        description: "description 0",
        owner_id: "200006",
        admin_id: "200006",
        is_available: true,
        category_id: "0",
        created_at: "2027-07-27",
        category: {id: "0", name: "Юмор"}, 
        wall_posts: [{wall_post_id: 0}, {wall_post_id: 1}, {wall_post_id: 2}, {wall_post_id: 3}, {wall_post_id: 4}, {wall_post_id: 5}]
    },
    {
        wall_id: "1",
        title: "Я тайлер с подпиской",
        image_url: "https://media.tatler.ru/photos/619795a8c2aa8983556eaf97/3:2/w_656,h_437,c_limit/327893448828.jpg",
        description: "description 0",
        owner_id: "200006",
        admin_id: "200006",
        is_available: true,
        category_id: "0",
        created_at: "2027-07-27",
        category: {id: "0", name: "Юмор"}, 
        wall_posts: [{wall_post_id: 6}, {wall_post_id: 7}, {wall_post_id: 8}, {wall_post_id: 9}, {wall_post_id: 10}, {wall_post_id: 11}]
    },
    {
        wall_id: "2",
        title: "И я Тайлер",
        image_url: "https://media.tatler.ru/photos/619795a8c2aa8983556eaf97/3:2/w_656,h_437,c_limit/327893448828.jpg",
        description: "description 2",
        owner_id: "200006",
        admin_id: "200006",
        is_available: true,
        category_id: "0",
        created_at: "2027-07-27",
        category: {id: "0", name: "Юмор"}, 
        wall_posts: [{wall_post_id: 12}, {wall_post_id: 13}, {wall_post_id: 14}, {wall_post_id: 15}, {wall_post_id: 16}, {wall_post_id: 17}]
    },
    {
        wall_id: "3",
        title: "Киберпанк",
        image_url: "https://i.playground.ru/p/QWgibEt_EOMoF639IXAT6A.webp",
        description: "description 3",
        owner_id: "200006",
        admin_id: "200006",
        is_available: true,
        category_id: "2",
        created_at: "2027-07-27",
        category: {id: "2", name: "Игры"}, 
        wall_posts: [{wall_post_id: 18}, {wall_post_id: 19}, {wall_post_id: 20}, {wall_post_id: 21}, {wall_post_id: 22}, {wall_post_id: 23}]
    },
    {
        wall_id: "4",
        title: "Я бегаю быстро",
        image_url: "https://www.kamgov.ru/files/2022/12/26/d09b405d6875bf170e21f6c00248f76c.jpg",
        description: "description 4",
        owner_id: "200006",
        admin_id: "200006",
        is_available: true,
        category_id: "1",
        created_at: "2027-07-27",
        category: {id: "1", name: "Спорт"}, 
        wall_posts: [{wall_post_id: 24}, {wall_post_id: 25}, {wall_post_id: 26}, {wall_post_id: 27}, {wall_post_id: 28}, {wall_post_id: 29}]
    },
    {
        wall_id: "5",
        title: "Я пинаю мяч",
        image_url: "https://www.mentoday.ru/upload/img_cache/5ca/5caaf01c700ece9eeb855438c5e59cfb_ce_3365x2240x0x1056_cropped_666x444.jpg",
        description: "description 5",
        owner_id: "200006",
        admin_id: "200006",
        is_available: true,
        category_id: "0",
        created_at: "2027-07-27",
        category: {id: "0", name: "Юмор"}, 
        wall_posts: [{wall_post_id: 30}, {wall_post_id: 31}, {wall_post_id: 32}, {wall_post_id: 33}, {wall_post_id: 34}, {wall_post_id: 35}]
    }
]

const testWallPosts = [
    {
        wall_post_id: "0",
        wall_post_name: "Wall Post 0",
        wall_post_description: "Description 0",
        wall_post_text: "Text 0",
        is_available: true,
        is_preview: true,
        position: "0",
        wall_id: "0",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "1",
        wall_post_name: "Wall Post 1",
        wall_post_description: "Description 1",
        wall_post_text: "Text 1",
        is_available: true,
        is_preview: true,
        position: "1",
        wall_id: "0",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "2",
        wall_post_name: "Wall Post 2",
        wall_post_description: "Description 2",
        wall_post_text: "Text 2",
        is_available: true,
        is_preview: true,
        position: "2",
        wall_id: "0",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "3",
        wall_post_name: "Wall Post 3",
        wall_post_description: "Description 3",
        wall_post_text: "Text 3",
        is_available: true,
        is_preview: true,
        position: "3",
        wall_id: "0",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "4",
        wall_post_name: "Wall Post 4",
        wall_post_description: "Description 4",
        wall_post_text: "Text 4",
        is_available: true,
        is_preview: true,
        position: "4",
        wall_id: "0",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "5",
        wall_post_name: "Wall Post 5",
        wall_post_description: "Description 5",
        wall_post_text: "Text 5",
        is_available: true,
        is_preview: true,
        position: "5",
        wall_id: "0",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "6",
        wall_post_name: "Wall Post 6",
        wall_post_description: "Description 6",
        wall_post_text: "Text 6",
        is_available: true,
        is_preview: true,
        position: "0",
        wall_id: "1",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "7",
        wall_post_name: "Wall Post 7",
        wall_post_description: "Description 7",
        wall_post_text: "Text 7",
        is_available: true,
        is_preview: true,
        position: "1",
        wall_id: "1",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "8",
        wall_post_name: "Wall Post 8",
        wall_post_description: "Description 8",
        wall_post_text: "Text 8",
        is_available: true,
        is_preview: true,
        position: "2",
        wall_id: "1",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "9",
        wall_post_name: "Wall Post 9",
        wall_post_description: "Description 9",
        wall_post_text: "Text 9",
        is_available: true,
        is_preview: true,
        position: "3",
        wall_id: "1",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "10",
        wall_post_name: "Wall Post 10",
        wall_post_description: "Description 10",
        wall_post_text: "Text 10",
        is_available: true,
        is_preview: true,
        position: "4",
        wall_id: "1",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "11",
        wall_post_name: "Wall Post 11",
        wall_post_description: "Description 11",
        wall_post_text: "Text 11",
        is_available: true,
        is_preview: true,
        position: "5",
        wall_id: "1",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "12",
        wall_post_name: "Wall Post 12",
        wall_post_description: "Description 12",
        wall_post_text: "Text 12",
        is_available: true,
        is_preview: true,
        position: "0",
        wall_id: "2",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "13",
        wall_post_name: "Wall Post 13",
        wall_post_description: "Description 13",
        wall_post_text: "Text 13",
        is_available: true,
        is_preview: true,
        position: "1",
        wall_id: "2",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "14",
        wall_post_name: "Wall Post 14",
        wall_post_description: "Description 14",
        wall_post_text: "Text 14",
        is_available: true,
        is_preview: true,
        position: "2",
        wall_id: "2",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "15",
        wall_post_name: "Wall Post 15",
        wall_post_description: "Description 15",
        wall_post_text: "Text 15",
        is_available: true,
        is_preview: true,
        position: "3",
        wall_id: "2",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "16",
        wall_post_name: "Wall Post 16",
        wall_post_description: "Description 16",
        wall_post_text: "Text 16",
        is_available: true,
        is_preview: true,
        position: "4",
        wall_id: "2",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "17",
        wall_post_name: "Wall Post 17",
        wall_post_description: "Description 17",
        wall_post_text: "Text 17",
        is_available: true,
        is_preview: true,
        position: "5",
        wall_id: "2",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "18",
        wall_post_name: "Wall Post 18",
        wall_post_description: "Description 18",
        wall_post_text: "Text 18",
        is_available: true,
        is_preview: true,
        position: "0",
        wall_id: "3",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "18",
        wall_post_name: "Wall Post 18",
        wall_post_description: "Description 18",
        wall_post_text: "Text 18",
        is_available: true,
        is_preview: true,
        position: "1",
        wall_id: "3",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "19",
        wall_post_name: "Wall Post 19",
        wall_post_description: "Description 19",
        wall_post_text: "Text 19",
        is_available: true,
        is_preview: true,
        position: "2",
        wall_id: "3",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "20",
        wall_post_name: "Wall Post 20",
        wall_post_description: "Description 20",
        wall_post_text: "Text 20",
        is_available: true,
        is_preview: true,
        position: "3",
        wall_id: "3",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "21",
        wall_post_name: "Wall Post 21",
        wall_post_description: "Description 21",
        wall_post_text: "Text 21",
        is_available: true,
        is_preview: true,
        position: "4",
        wall_id: "3",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "22",
        wall_post_name: "Wall Post 22",
        wall_post_description: "Description 22",
        wall_post_text: "Text 22",
        is_available: true,
        is_preview: true,
        position: "5",
        wall_id: "3",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "23",
        wall_post_name: "Wall Post 23",
        wall_post_description: "Description 23",
        wall_post_text: "Text 23",
        is_available: true,
        is_preview: true,
        position: "0",
        wall_id: "4",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "24",
        wall_post_name: "Wall Post 24",
        wall_post_description: "Description 24",
        wall_post_text: "Text 24",
        is_available: true,
        is_preview: true,
        position: "1",
        wall_id: "4",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "25",
        wall_post_name: "Wall Post 25",
        wall_post_description: "Description 25",
        wall_post_text: "Text 25",
        is_available: true,
        is_preview: true,
        position: "2",
        wall_id: "4",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "26",
        wall_post_name: "Wall Post 26",
        wall_post_description: "Description 26",
        wall_post_text: "Text 26",
        is_available: true,
        is_preview: true,
        position: "3",
        wall_id: "4",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "27",
        wall_post_name: "Wall Post 27",
        wall_post_description: "Description 27",
        wall_post_text: "Text 27",
        is_available: true,
        is_preview: true,
        position: "4",
        wall_id: "4",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "28",
        wall_post_name: "Wall Post 28",
        wall_post_description: "Description 28",
        wall_post_text: "Text 28",
        is_available: true,
        is_preview: true,
        position: "5",
        wall_id: "4",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "29",
        wall_post_name: "Wall Post 29",
        wall_post_description: "Description 29",
        wall_post_text: "Text 29",
        is_available: true,
        is_preview: true,
        position: "5",
        wall_id: "4",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "30",
        wall_post_name: "Wall Post 30",
        wall_post_description: "Description 30",
        wall_post_text: "Text 30",
        is_available: true,
        is_preview: true,
        position: "0",
        wall_id: "5",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "31",
        wall_post_name: "Wall Post 31",
        wall_post_description: "Description 31",
        wall_post_text: "Text 31",
        is_available: true,
        is_preview: true,
        position: "1",
        wall_id: "5",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "32",
        wall_post_name: "Wall Post 32",
        wall_post_description: "Description 32",
        wall_post_text: "Text 32",
        is_available: true,
        is_preview: true,
        position: "2",
        wall_id: "5",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "33",
        wall_post_name: "Wall Post 33",
        wall_post_description: "Description 33",
        wall_post_text: "Text 33",
        is_available: true,
        is_preview: true,
        position: "3",
        wall_id: "5",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "34",
        wall_post_name: "Wall Post 34",
        wall_post_description: "Description 34",
        wall_post_text: "Text 34",
        is_available: true,
        is_preview: true,
        position: "4",
        wall_id: "5",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "35",
        wall_post_name: "Wall Post 35",
        wall_post_description: "Description 35",
        wall_post_text: "Text 35",
        is_available: true,
        is_preview: true,
        position: "5",
        wall_id: "5",
        created_at: "2027-07-27",
    },
    {
        wall_post_id: "36",
        wall_post_name: "Wall Post 36",
        wall_post_description: "Description 36",
        wall_post_text: "Text 36",
        is_available: true,
        is_preview: true,
        position: "5",
        wall_id: "6",
        created_at: "2027-07-27",
    },
]

export async function getWallById(wallId : string) : Promise<any> {
    if (TEST_RUN) {
        let data = [{
            wall_id: testWalls[0].wall_id,
            title: testWalls[0].title,
            image_url: testWalls[0].image_url,
            description: testWalls[0].description,
            owner_id: testWalls[0].owner_id,
            creator_id: testWalls[0].admin_id,
            is_available: true,
            category_id: testWalls[0].category_id,
            created_at: testWalls[0].created_at
        }]
        if (testWalls.length < parseInt(wallId)) {
            return testWalls[0];
        }
        return testWalls[parseInt(wallId)];
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
    if (TEST_RUN) {
        if (testWalls.length < parseInt(wallId)) {
            return testWalls[0];
        }
        return testWalls[parseInt(wallId)];
    }

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
    if (TEST_RUN) {
        return testWalls;
    }
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


export async function searchWalls(title?:string, category_id?:string) : Promise<any> {
    console.log(title);
    console.log(category_id);
    if (TEST_NODE_RUN) {
        const resp_node = await axios.put("//127.0.0.1:5000/walls/search-walls", {
            title: title,
            category_id: category_id
        }, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(response => {
            // console.log(response);
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
        return resp_node;
    }
    
    if (TEST_RUN) {
        return testWalls;
    }
    const apiUrl = `${SERVER_ADDRESS}/walls/all`;
    const resp = await axios.get(apiUrl, {
        params: {
            title: title,
            category_id: category_id
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
    if (TEST_RUN) {
        if (testWalls.length < parseInt(wallId)) {
            return testWalls[0];
        }
        return testWalls[parseInt(wallId)];
    }
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


export async function getWallPostById({wallPostId} : {wallPostId:string})  : Promise<WallPostContent | any>{
    if (TEST_RUN) {
        if (testWallPosts.length < parseInt(wallPostId)) {
            return testWallPosts[0];
        }
        return testWalls[parseInt(wallPostId)];
    }
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
}


export async function getWallPostByPosition({wallId, position} : {wallId:string, position:string}) {
    if (TEST_RUN) {
        if (testWallPosts.length < parseInt(wallId) * parseInt(position)) {
            return testWallPosts[0];
        }
        return testWalls[parseInt(wallId) * parseInt(position)];
    }
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



export async function getWallPosts(wallId : string) : Promise<WallPostContent[]> {
    if (TEST_RUN) {
        return testWallPosts;
    }
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
    if (TEST_NODE_RUN) {
        const resp_node = await axios.get("//127.0.0.1:5000/walls/wall-themes", {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
        return resp_node;
    }

    if (TEST_RUN) {
        let data = [
            {id: "0", name: "Юмор"},
            {id: "1", name: "Спорт"},
            {id: "2", name: "Игры"},
            {id: "3", name: "Еда"},
            {id: "4", name: "Музыка"},
            {id: "5", name: "Фотография"},
            {id: "6", name: "Финансы"},
            {id: "7", name: "Информационные технологии"},
            {id: "8", name: "Кино"},
            {id: "9", name: "Наука"}
        ]    
        return data;
    }
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


export async function getNews() : Promise<any> {
    if (TEST_RUN) {
        let data = [
            {"id": 1, "title": 'Дайджест новых сообществ', "content": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum pulvinar libero quis volutpat. Quisque non augue ut nisi condimentum interdum. Cras posuere sem in eros vulputate finibus. Vestibulum rhoncus ligula sit amet faucibus vulputate. Aenean ut interdum diam. Cras cursus vehicula erat, iaculis vulputate justo condimentum vitae. Quisque iaculis iaculis libero pretium dictum. Aliquam odio nisl, viverra at suscipit volutpat, placerat et orci. Vestibulum neque magna, maximus vitae viverra at, pretium nec risus. Cras egestas erat mi, at consequat erat ultricies ut. Curabitur egestas viverra sagittis. Sed at odio et magna scelerisque lacinia. Donec felis nisl, placerat vitae ex ac, semper mattis magna. Aliquam erat volutpat. Curabitur luctus sapien at nunc varius, nec convallis enim laoreet. Aenean nec viverra lacus, quis aliquam lectus.\nEtiam fringilla lectus tellus, sollicitudin pretium dolor mollis vitae. Phasellus porttitor nibh et semper sagittis. Suspendisse efficitur, ipsum et suscipit scelerisque, orci massa hendrerit libero, eu porta ipsum orci vel est. Nulla mauris lorem, iaculis nec neque in, posuere faucibus justo. Sed suscipit massa augue. Sed vitae elit ex. Quisque ac dui id dui laoreet laoreet sit amet sit amet orci. Sed bibendum risus sed faucibus congue. Donec nec felis nulla. Ut pretium tortor eget ornare.', "author": 'Автор 1', "date": "2023-10-18", "category": "Test", "image_url": "https://abrakadabra.fun/uploads/posts/2022-01/1643492124_2-abrakadabra-fun-p-norton-boitsovskii-klub-8.jpg" },
            {"id": 2, "title": 'Как найти единомышленников?', "content": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum pulvinar libero quis volutpat. Quisque non augue ut nisi condimentum interdum. Cras posuere sem in eros vulputate finibus. Vestibulum rhoncus ligula sit amet faucibus vulputate. Aenean ut interdum diam. Cras cursus vehicula erat, iaculis vulputate justo condimentum vitae. Quisque iaculis iaculis libero pretium dictum. Aliquam odio nisl, viverra at suscipit volutpat, placerat et orci. Vestibulum neque magna, maximus vitae viverra at, pretium nec risus. Cras egestas erat mi, at consequat erat ultricies ut. Curabitur egestas viverra sagittis. Sed at odio et magna scelerisque lacinia. Donec felis nisl, placerat vitae ex ac, semper mattis magna. Aliquam erat volutpat. Curabitur luctus sapien at nunc varius, nec convallis enim laoreet. Aenean nec viverra lacus, quis aliquam lectus.\nEtiam fringilla lectus tellus, sollicitudin pretium dolor mollis vitae. Phasellus porttitor nibh et semper sagittis. Suspendisse efficitur, ipsum et suscipit scelerisque, orci massa hendrerit libero, eu porta ipsum orci vel est. Nulla mauris lorem, iaculis nec neque in, posuere faucibus justo. Sed suscipit massa augue. Sed vitae elit ex. Quisque ac dui id dui laoreet laoreet sit amet sit amet orci. Sed bibendum risus sed faucibus congue. Donec nec felis nulla. Ut pretium tortor eget ornare.', "author": 'Автор 1', "date": "2023-10-17", "category": "Test", "image_url": "https://media.glamourmagazine.co.uk/photos/64b6ae8fcd1ad7c51ecf045c/master/pass/RYAN%20GOSLING%20EVA%20MENDES%20180723%20defaultGettyImages-1527942629.jpg" },
            {"id": 3, "title": 'Бесплатные чебуреки для нашедших себя', "content": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum pulvinar libero quis volutpat. Quisque non augue ut nisi condimentum interdum. Cras posuere sem in eros vulputate finibus. Vestibulum rhoncus ligula sit amet faucibus vulputate. Aenean ut interdum diam. Cras cursus vehicula erat, iaculis vulputate justo condimentum vitae. Quisque iaculis iaculis libero pretium dictum. Aliquam odio nisl, viverra at suscipit volutpat, placerat et orci. Vestibulum neque magna, maximus vitae viverra at, pretium nec risus. Cras egestas erat mi, at consequat erat ultricies ut. Curabitur egestas viverra sagittis. Sed at odio et magna scelerisque lacinia. Donec felis nisl, placerat vitae ex ac, semper mattis magna. Aliquam erat volutpat. Curabitur luctus sapien at nunc varius, nec convallis enim laoreet. Aenean nec viverra lacus, quis aliquam lectus.\nEtiam fringilla lectus tellus, sollicitudin pretium dolor mollis vitae. Phasellus porttitor nibh et semper sagittis. Suspendisse efficitur, ipsum et suscipit scelerisque, orci massa hendrerit libero, eu porta ipsum orci vel est. Nulla mauris lorem, iaculis nec neque in, posuere faucibus justo. Sed suscipit massa augue. Sed vitae elit ex. Quisque ac dui id dui laoreet laoreet sit amet sit amet orci. Sed bibendum risus sed faucibus congue. Donec nec felis nulla. Ut pretium tortor eget ornare.', "author": null, "date": "2023-10-17", "category": "Test", "image_url": "https://assets.gq.ru/photos/5dbaf4dac6a9370008ae64b1/master/w_1600%2Cc_limit/Legion_cap_clubkfs170908_14.jpg" },
            {"id": 4, "title": 'Кража изображений с сайта Mavka Project', "content": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum pulvinar libero quis volutpat. Quisque non augue ut nisi condimentum interdum. Cras posuere sem in eros vulputate finibus. Vestibulum rhoncus ligula sit amet faucibus vulputate. Aenean ut interdum diam. Cras cursus vehicula erat, iaculis vulputate justo condimentum vitae. Quisque iaculis iaculis libero pretium dictum. Aliquam odio nisl, viverra at suscipit volutpat, placerat et orci. Vestibulum neque magna, maximus vitae viverra at, pretium nec risus. Cras egestas erat mi, at consequat erat ultricies ut. Curabitur egestas viverra sagittis. Sed at odio et magna scelerisque lacinia. Donec felis nisl, placerat vitae ex ac, semper mattis magna. Aliquam erat volutpat. Curabitur luctus sapien at nunc varius, nec convallis enim laoreet. Aenean nec viverra lacus, quis aliquam lectus.\nEtiam fringilla lectus tellus, sollicitudin pretium dolor mollis vitae. Phasellus porttitor nibh et semper sagittis. Suspendisse efficitur, ipsum et suscipit scelerisque, orci massa hendrerit libero, eu porta ipsum orci vel est. Nulla mauris lorem, iaculis nec neque in, posuere faucibus justo. Sed suscipit massa augue. Sed vitae elit ex. Quisque ac dui id dui laoreet laoreet sit amet sit amet orci. Sed bibendum risus sed faucibus congue. Donec nec felis nulla. Ut pretium tortor eget ornare.', "author": null, "date": "2023-10-17", "category": "Test", "image_url": null },
            {"id": 5, "title": 'Открытие новостного портала сайта', "content": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum pulvinar libero quis volutpat. Quisque non augue ut nisi condimentum interdum. Cras posuere sem in eros vulputate finibus. Vestibulum rhoncus ligula sit amet faucibus vulputate. Aenean ut interdum diam. Cras cursus vehicula erat, iaculis vulputate justo condimentum vitae. Quisque iaculis iaculis libero pretium dictum. Aliquam odio nisl, viverra at suscipit volutpat, placerat et orci. Vestibulum neque magna, maximus vitae viverra at, pretium nec risus. Cras egestas erat mi, at consequat erat ultricies ut. Curabitur egestas viverra sagittis. Sed at odio et magna scelerisque lacinia. Donec felis nisl, placerat vitae ex ac, semper mattis magna. Aliquam erat volutpat. Curabitur luctus sapien at nunc varius, nec convallis enim laoreet. Aenean nec viverra lacus, quis aliquam lectus.\nEtiam fringilla lectus tellus, sollicitudin pretium dolor mollis vitae. Phasellus porttitor nibh et semper sagittis. Suspendisse efficitur, ipsum et suscipit scelerisque, orci massa hendrerit libero, eu porta ipsum orci vel est. Nulla mauris lorem, iaculis nec neque in, posuere faucibus justo. Sed suscipit massa augue. Sed vitae elit ex. Quisque ac dui id dui laoreet laoreet sit amet sit amet orci. Sed bibendum risus sed faucibus congue. Donec nec felis nulla. Ut pretium tortor eget ornare.', "author": null, "date": "2023-10-16", "category": "Test", "image_url": "https://media.glamourmagazine.co.uk/photos/64b6ae8fcd1ad7c51ecf045c/master/pass/RYAN%20GOSLING%20EVA%20MENDES%20180723%20defaultGettyImages-1527942629.jpg" }
        ]    
        return data;
    }

    const apiUrl = `${SERVER_ADDRESS}/news`;
    const resp = await axios.get(apiUrl)
    .then(response => {
        return response.data;
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
    if (TEST_RUN) {
        let data = [
            {seen: false}
        ]    
        return data[0];
    }
    return null;
}

export async function getDashboardWalls(userId: string) {
    const recommendedWalls = [testWalls[0], testWalls[2], testWalls[3], testWalls[4], testWalls[5]];
    const subbedWalls = [testWalls[1]];
    return { recommendedWalls, subbedWalls };
}

export async function getUserByUsername(username: string) : Promise<UserContent> {
    if (TEST_NODE_RUN) {
        const resp_node = await axios.get(`//127.0.0.1:5000/users/${username}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
        return resp_node;
    }

    // if (TEST_RUN) {
        const geralt = {
            username: "gervant2",
            first_name: "Геральт",
            last_name: "Ривийский",
            wall_id: "6",
            avatar_url: "https://i.ibb.co/t33h8S6/witcher.jpg"
        };
        return geralt;
    // }
}