import React from "react"

const order = (props) => {
  const traits = [];

    for (let trait in props.traits) {
      traits.push( {
        name: trait,
        amount:props.traits[trait]
      })
    }

    const traitOutput = traits.map (trait => {
      return <span
          style={{
              textTransform: 'capitalize',
              display: 'inline-block',
              margin: '0 8px',
              border: '1px solid #ccc',
              padding: '5px'
              }}
          key={trait.name}>{trait.name} ({trait.amount})</span>;
  });


return (
  <div >
        <p>Traits: {traitOutput}</p>
        <p>Price: <strong>USD {Number.parseFloat( props.price ).toFixed( 2 )}</strong></p>
    </div>
)

}

export default order;
