
const Cart = ({ selectedActor, totalCost,remainingCost }) => {

      // console.log(selectedActor);

      return (
            <div className="border w-1/4 space-y-4">
                  {/* Selected actor length */}
                  <h3 className="text-white text-center text-2xl py-3 font-bold">Selected Actors: {selectedActor.length}</h3>

                  {/* Total Cost */}
                  <h3 className="text-white text-lg font-medium text-center">Total Cost: ${totalCost}</h3>

                  {/* Remaining cost  */}
                  <h3 className="text-white text-lg font-medium text-center">Remaining Cost: ${remainingCost}</h3>


                  {/* Dynamically added actors name when btn clicked */}
                  <div>
                        {
                              selectedActor.map((selectedActor, idx) =>
                                    <li className="text-white text-lg font-medium text-center" key={idx}>{selectedActor.name}</li>
                              )
                        }
                  </div>

            </div>
      );
};

export default Cart;