export default class EmployeesServise {
  
  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getAllPeople = async () => {
      const res = await this.getResource('https://reqres.in/api/users?per_page=12');
      return res.data;
    };
} 