export const getDetails = async(id:string):Promise<{}>  =>{
    const data =  await fetch(`https://bqmagrjds2.execute-api.us-west-2.amazonaws.com/resumes/${id}`);
    return data.json();
};

