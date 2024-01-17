 export function formatDate(inputDate) {

    var date = new Date(inputDate);
    
    if (!isNaN(date.getTime())) {
        const result = date.toLocaleDateString("en-GB", { // you can use undefined as first argument
            year: "numeric",
            day: "2-digit",
            month: "2-digit",
          })
          const splitDate = result.split("/")
          const finalDate = `${splitDate[1]}/${splitDate[0]}/${splitDate[2]}`

          


        return finalDate ;
    }

} 
