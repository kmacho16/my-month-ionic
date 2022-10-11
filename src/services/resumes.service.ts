export const getAll = async (): Promise<{}> => {
    const data = await fetch(`https://bqmagrjds2.execute-api.us-west-2.amazonaws.com/resumes`);
    return data.json();
};

export const post = async (d: { month: string, balance: string }): Promise<{}> => {
    const data = await fetch(`https://bqmagrjds2.execute-api.us-west-2.amazonaws.com/resumes`,
        {
            method: 'PUT',
            body: JSON.stringify(d)
        });
    return data.json();
};

export const deleteResumes = async (id: string): Promise<{}> => {
    const data = await fetch(`https://bqmagrjds2.execute-api.us-west-2.amazonaws.com/resumes/${id}`,
        {
            method: 'DELETE'
        });
    return data.json();
};

