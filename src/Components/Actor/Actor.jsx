
const Actor = ({ actor, handleSelect }) => {

      const { image, name, role, salary } = actor;

      return (
            <div>
                  <div className="card card-compact border border-white">
                        <figure><img className="rounded-full" src={image} alt="Shoes" /></figure>
                        <div className="card-body space-y-4">
                              <h2 className="text-white text-center text-2xl font-bold">{name}</h2>
                              <p className="text-white text-center text-lg font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, necessitatibus!</p>

                              <div className="flex justify-between items-center text-center">
                                    <p className="text-white text-base font-bold">Salary: ${salary}</p>
                                    <p className="text-white text-base font-bold">{role}</p>
                              </div>
                              <div className="card-actions justify-center">
                                    <button onClick={()=>handleSelect(actor)} className="text-white btn btn-success">Select</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Actor;