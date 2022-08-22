import React from 'react';
import Cards from './Cards';
import List from './List';
    

function createcard(list) {
    return (
        <Cards
            img={list.imgUrl}
            name={list.name}
            flag={list.flag}
            reviews={list.reviews}
        />
    );
}
function card_data() {
    return (
        // <div>
        //     {List.map(createcard)}
        // </div>

           <Cards
          img={List[0].imgUrl}
          name={List[0].name}
          kg={List[0].flag}
          price={List[0].reviews}
           />,

            <Cards
          img={List[1].imgUrl}
          name={List[1].name}
          kg={List[1].flag}
          price={List[1].reviews}
           />

    )
}
export default card_data;