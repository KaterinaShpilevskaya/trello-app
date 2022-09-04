export const getDate = () => {
    let date = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    return date.toLocaleString('en', options)
  };