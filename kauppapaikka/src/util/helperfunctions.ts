export const sleep = async (ms:number) => {
    await new Promise((r) => setTimeout(r, ms));
};

export const getDate = () => {
    let stamp =  new Date().toLocaleString("fi-FI", {timeZone: 'Europe/Helsinki'})
    return stamp
}