export default function sortCards(arr) {

    const widthCards = {
        quarter: 25,
        half: 50,
        full: 100
    }

    let accWidth = 0;
    const rows = [];
    let row = [];

        for (let i = 0; i < arr.length; i++) {
            const card = arr[i]; 

            let width = widthCards[card.width];

            if (accWidth + width < 100) {
                row.push(card);
                accWidth += width;
            } else if (accWidth + width == 100) {
                row.push(card);
                rows.push(row);
                row = [];
                accWidth = 0;
            } else if (accWidth + width > 100) {
                arr.push(card);
            }
        }
        
        if (row.length > 0) {
            rows.push(row);
        }

    return rows.flat();
}