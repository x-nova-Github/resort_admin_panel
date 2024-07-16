export const capitalizeWord=(input:any)=>{
    return input.toLowerCase().split(' ').map((word:any) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }