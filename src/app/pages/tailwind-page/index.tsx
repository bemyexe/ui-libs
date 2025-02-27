import { Page } from '../../components/page';

export const TailWindPage = () => {
  return (
    <Page withHeader className="flex justify-center">
      <div className="container m-4  rounded-xl p-3 lg:grid grid-cols-4 gap-4 md:flex flex-col">
        <div className="bg-primary/50 card font-bold col-span-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ullam
          explicabo a cumque neque doloremque totam beatae atque suscipit
          aperiam facilis at sequi possimus, aspernatur quibusdam quod nulla
          quos reiciendis.
        </div>
        <div className="bg-primary card hover:bg-primary-dark">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut iusto,
          officia cum eius rerum expedita aliquid odio recusandae accusantium
          non tempore voluptatem optio perferendis repudiandae at, nihil nulla
          ipsam quod.e
        </div>
        <div className="bg-primary-dark card focus:border-4 row-span-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          provident et earum ipsam est, magni repellendus assumenda, quo nostrum
          facilis delectus amet a. Optio dolorum facere necessitatibus
          repellendus corporis dolorem.
        </div>
        <div className="bg-primary-dark/40 card hover:text-sm hover:grid grid-cols-3 gap-4">
          <h1> Expedita, ut!</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Aperiam a voluptatibus dignissimos. Soluta ab eum ea, ad
            perspiciatis veritatis, atque non consequuntur architecto obcaecati
            dolorem, laborum praesentium magnam!{' '}
          </p>
        </div>
        <div className="bg-primary/80 card col-span-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam a
          voluptatibus dignissimos. Soluta ab eum ea, ad perspiciatis veritatis,
          atque non consequuntur architecto obcaecati dolorem, laborum
          praesentium magnam! Expedita, ut!
        </div>
        <div className="bg-primary/0 card border-4 border-primary col-span-4 text-black">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam a
          voluptatibus dignissimos. Soluta ab eum ea, ad perspiciatis veritatis,
          atque non consequuntur architecto obcaecati dolorem, laborum
          praesentium magnam! Expedita, ut!
        </div>
      </div>
    </Page>
  );
};
