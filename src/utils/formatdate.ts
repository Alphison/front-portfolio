export const formatDate = (inputDate:string) => {
    const date = new Date(inputDate);

    return date.toLocaleDateString('ru', { year: 'numeric', month: 'numeric', day: 'numeric' });
}