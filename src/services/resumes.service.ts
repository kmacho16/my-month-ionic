export const getAll = async():Promise<{}>  =>{
    const data =  await fetch(`https://bqmagrjds2.execute-api.us-west-2.amazonaws.com/resumes`);
    return data.json();
};

