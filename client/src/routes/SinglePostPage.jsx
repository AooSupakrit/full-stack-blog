import React from "react";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In!
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            sint amet in, vel alias debitis porro sit sunt totam, qui commodi
            autem praesentium, quam facere dicta accusamus eos sequi expedita.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            mollitia dolorum commodi aliquam optio facilis, odio eos doloremque!
            Ex voluptatem id reiciendis eos earum, magni molestias! Dolores
            voluptatum dolore iste debitis expedita tenetur similique asperiores
            aut odio assumenda est, ducimus veritatis voluptas, blanditiis iure
            excepturi magni earum alias perferendis praesentium! Voluptates,
            eligendi, quam amet ipsa, molestiae cumque provident eius magnam sit
            quaerat facilis voluptatibus tenetur suscipit? Quibusdam nam nulla
            quaerat excepturi repellendus. Qui rem quibusdam eum ab non ipsa
            tempore dicta veritatis nobis fuga deserunt ratione aut modi hic
            consequuntur saepe, earum unde reiciendis eaque nulla odit similique
            commodi quisquam!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            porro voluptates voluptatem, voluptatum iste doloribus soluta
            corrupti explicabo maxime ab nisi quasi consectetur sit maiores
            aliquid quos facere placeat tempora blanditiis culpa assumenda
            omnis. Voluptate eum magni officiis numquam excepturi beatae qui
            harum facilis dolorem aliquam molestias ullam, dolorum praesentium
            nemo optio rerum officia a distinctio reiciendis. Cupiditate
            voluptatibus ea id quis laudantium. Eius dolores inventore dolore
            adipisci quod aliquam cupiditate suscipit, ea corporis non sint in
            repudiandae. Laborum, sit quasi ratione, atque assumenda asperiores
            vero cupiditate ipsa nobis nemo quia odit culpa molestias animi quae
            fugit. Sequi delectus ratione sapiente! Magnam similique nesciunt
            quod sed tempore quisquam, sunt laboriosam, aspernatur commodi a
            placeat soluta cupiditate hic expedita, corporis alias voluptas est
            aperiam delectus? Quibusdam assumenda nostrum dolores, voluptas
            voluptate fugiat dolorem omnis fugit laborum, consequuntur
            repellendus illo impedit minus vero corrupti et? Quis, accusantium
            corporis fuga distinctio iure incidunt!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit veniam
            quaerat maiores numquam distinctio repellendus atque nesciunt illum.
            Quis adipisci illum ut ipsam? Nobis non architecto animi dolores
            iusto sequi velit vel accusamus autem nisi soluta nihil ab eum aut
            natus nulla cum, consequuntur explicabo vero asperiores ducimus?
            Reprehenderit dolorum ipsa voluptates nobis animi quae, aliquid
            earum veniam! Aperiam aliquam quos saepe voluptate dolorum itaque
            maxime atque iure! Consectetur omnis placeat aut voluptatem
            excepturi iusto rem, unde eveniet repellendus sint perspiciatis
            veniam inventore quisquam dolores doloremque quos minus repellat
            facilis ut quibusdam recusandae explicabo. Repellendus reprehenderit
            quos voluptates suscipit consequatur maiores in quasi unde, minima
            est placeat sed! Ut, nisi maiores nemo velit alias voluptate autem
            provident esse fugit reprehenderit ipsam necessitatibus eum veniam,
            possimus sint iste placeat dolor vitae odit dicta? Quod et nostrum,
            tenetur nesciunt vel necessitatibus possimus natus dolores velit,
            accusantium facere. Non rerum voluptatum molestiae consequatur
            officiis nobis? Est inventore quam explicabo reprehenderit, corrupti
            cupiditate sequi omnis suscipit reiciendis modi, repudiandae aliquam
            asperiores, consequuntur aut aperiam possimus qui nihil voluptatem
            odio tempora? Quasi ratione magnam molestias inventore deserunt enim
            delectus dolor voluptatum nobis porro ut iste laboriosam voluptatem
            dolorem, error ex qui iusto cupiditate minima dolore.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            temporibus pariatur ut in doloremque eum autem labore quo. Explicabo
            saepe, vitae architecto non harum optio. Provident natus qui
            cupiditate, iusto sit quidem ipsa modi, nesciunt nam nulla pariatur
            ut, tempore amet sapiente sint ad minima nobis ea unde. Magnam
            quaerat voluptas atque nesciunt numquam illum consequatur fuga,
            neque ipsam cupiditate officia, asperiores nulla ea ut inventore
            nostrum rem minus esse hic deserunt fugiat iste? Eum aspernatur
            animi blanditiis suscipit. Possimus suscipit asperiores fugiat
            aperiam. Voluptatum exercitationem repellat, veniam eligendi maxime
            unde praesentium doloremque qui illum animi, maiores impedit.
            Provident vero repellendus officia placeat aspernatur sequi soluta
            veritatis voluptate assumenda, ab non, minima quia veniam numquam
            est ea eligendi nesciunt cupiditate animi exercitationem. Mollitia
            sit excepturi explicabo saepe quisquam fuga, modi alias similique
            quas eos. Itaque magni voluptatibus nobis quidem repellat obcaecati
            a facilis, tenetur quisquam dolore odio animi nihil sint.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            numquam libero illo fugiat laudantium. Eum ipsam vitae enim dolor
            reiciendis distinctio omnis aperiam maiores, dolorum qui debitis
            ducimus nulla tempora ut dicta quisquam magnam at fuga perferendis
            corrupti quidem exercitationem libero voluptatem? Aperiam esse ad
            nam delectus a ullam nobis suscipit unde animi ipsum non dolores
            facere commodi voluptatum repellendus hic quis assumenda amet aut
            vero libero, reprehenderit fugiat. Error expedita nesciunt soluta,
            consequatur ex saepe debitis exercitationem possimus odio fugiat
            ducimus consectetur deserunt est, minima maiores harum unde eius
            nulla ipsum porro. Commodi, odit quaerat enim inventore eos
            blanditiis!
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
