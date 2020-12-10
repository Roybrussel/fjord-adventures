import axios from "axios";

class ActivityService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true, // indicates whether or not cross-site Access-Control requests should be made using credentials
    });
  }

  // Create a project
  createActivity = (data) => {
    return this.service.post("/activities", data).then((response) => response);
  };

  // Method to retrieve all projects
  getActivities = () => {
    return this.service.get("/activities").then((response) => response);
  };

  // Method to retrieve a project
  getOneActivity = (id) => {
    return this.service.get(`/activities/${id}`).then((response) => response);
  };

  // Method to update a project
  updateActivity = (id, data) => {
    return this.service
      .put(`/activities/${id}`, data)
      .then((response) => response);
  };

  // Method to delete a project
  removeActivity = (id) => {
    return this.service
      .delete(`/activities/${id}`)
      .then((response) => response);
  };
}

export default ActivityService;
