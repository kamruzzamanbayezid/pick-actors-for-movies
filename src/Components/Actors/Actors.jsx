import { useEffect, useState } from "react";
import Actor from "../Actor/Actor";

const Actors = ({handleSelect}) => {

      const [actors, setActors] = useState([]);

      useEffect(() => {
            fetch('../../../public/data.json')
                  .then(res => res.json())
                  .then(data => setActors(data))
      }, []);

      return (
            <div className="border w-3/4">
                  <div className="grid grid-cols-2 gap-6">
                        {
                              actors.map((actor, idx) => <Actor key={actor.id + idx} actor={actor} handleSelect={handleSelect}></Actor>)
                        }
                  </div>
            </div>
      );
};

export default Actors;