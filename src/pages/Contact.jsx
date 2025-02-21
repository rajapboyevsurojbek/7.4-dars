import React from "react";
import { useGetSingleBlogQuery } from "../redux/api/blog.api";
import { useParams } from "react-router-dom";

const Contact = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetSingleBlogQuery(id);
  return (
    <div className="container mx-auto h-screen">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
      beatae nostrum in distinctio vitae itaque libero, ratione maxime facere ut
      nobis fugiat. Ex, distinctio iure. Optio ipsa neque fugit maiores quod,
      accusamus quidem obcaecati excepturi esse rem perferendis illo expedita,
      accusantium ducimus repudiandae, et ipsam! Laborum dicta veritatis
      perspiciatis expedita! Voluptatibus accusantium nisi provident nihil
      accusamus aliquid, ut similique nam, necessitatibus quidem quam magni
      porro debitis officia animi alias illum dolores, repellat ipsa corrupti
      eligendi non consectetur? Similique tempora sed delectus atque laudantium
      soluta cumque enim dicta, sit animi. Expedita nostrum possimus vel omnis
      eaque eveniet perferendis, voluptatem magnam molestiae! Consectetur vero
      reiciendis architecto, quo qui odit corporis, nobis minus optio sunt
      voluptates voluptatibus, alias sequi rem nisi nesciunt quam magnam
      voluptate nostrum quaerat ad. Necessitatibus, animi dolorum. Quaerat
      repudiandae aut labore dolore odio adipisci facilis accusantium ea
      provident modi eius doloremque minus a unde, veritatis totam sequi
      perferendis illum asperiores quisquam fuga doloribus et ad quidem. Cum
      quae soluta repudiandae corporis nemo at, asperiores reiciendis error nisi
      quis tenetur deleniti nesciunt reprehenderit expedita facere deserunt
      aperiam similique officiis eos exercitationem doloribus quos consectetur
      cumque. Nulla quos sint ullam quidem minus corporis, omnis aliquid
      voluptatum. Praesentium blanditiis consequuntur, ea ullam vitae inventore
      eius ut mollitia quia architecto exercitationem, dolor assumenda quos
      quasi a. Consequuntur, voluptates cumque nulla temporibus illum commodi
      quasi officia ratione, vel velit beatae, deleniti architecto tempora
      impedit molestias reprehenderit adipisci dolorum. Modi iure numquam
      similique velit, exercitationem quam repudiandae earum dicta consequatur
      porro rerum perferendis? Iure quia modi aut. Veritatis voluptatum
      consectetur nesciunt maxime modi recusandae eum amet officia quidem
      reiciendis sunt laboriosam illum aut ex, aperiam fugit, nostrum minima
      quasi earum porro ipsum. Ea commodi alias iste necessitatibus nemo tempora
      voluptates expedita qui saepe labore reprehenderit nulla totam, sit, rem
      consectetur fugit! Aperiam sunt ea repudiandae!
    </div>
  );
};

export default Contact;
