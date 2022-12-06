import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "admin@admin.com";

  await prisma.user.delete({ where: { email } }).catch(() => {
  });

  const hashedPassword = await bcrypt.hash("12345678", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });


  await prisma.inventori.create({
    data: {
      title: "Static Site Generator Website",
      description: "Built a modern website with single page app technology react ,angular ,svelte and blazor",
      link: "https://www.fiverr.com/creativitas/design-your-modern-website-using-jekyll",
      cover: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/232274496/original/b2b1d6d45fcdad78188e9a00ae27866ddf026b39/design-your-modern-website-using-jekyll.png",
      video: "https://www.youtube.com/embed/LdUJlBhakVk",
      markdown: `This time for update and upgrade your modern website with modern technology, yess... static site generator is a new era of website development, this because very fast and powerfull on SEO, and you can select what your favorite SSG , jekyll ruby on rails for easy development integration with github repo and pages , of course we can use github host the best and fast cloud hosting solutions, or we can use eleventy aka 11ty run on node js , automatic SEO injection and many features you can use it. or use astro the new SSG , get started now built your modern website app with Static Site Generator.`.trim(),
	userId: user.id,
  },
  });

  await prisma.inventori.create({
    data: {
      title: "Single Page App Website",
      description: "This time to create and develope modern website with react, remix ,next ,gatsby, angular , svelte,blazor wasm",
      link: "https://www.fiverr.com/creativitas/create-your-website-with-new-technology",
      cover: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/232280785/original/9eb2a56e20693effb0662bf8cc68d6f4078d5059/create-your-website-with-new-technology.jpg",
      video: "https://www.youtube.com/embed/VNIfcmP6Zwk",
      markdown: `The new era with single page app technology web development. If you need fast website, with no need loading to access every web page so use single page app is a best choice for you, many website is migration on this technology because with use single page app, your web is very elegant and of course powerfull with google SEO. you can select your favorit framework for develope your modern web app, like react with gatsby , next, remix  framework, angular by google dev , svelte with sapper or sveltekit framework, or use microsoft technology with blazor wasm. get start now migration and update your website with modern website SPA.`.trim(),
	userId: user.id,
  },
  });

  await prisma.inventori.create({
    data: {
      title: "Progresive Website Application",
      description: "Built all in one mobile and website app using pwa sapper blazor wasm",
      link: "https://www.fiverr.com/creativitas/design-your-website-with-progresive-web-application",
      cover: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/287004570/original/c8536d1df1c924f4ad1a658bdf22f40156401cd2/design-your-website-with-progresive-web-application.jpg",
      video: "https://www.youtube.com/embed/1NEr74eUvCI",
      markdown: `So if you need to build complete website and mobile app , progresive web app is a best solutions, with use this modern technology make easy for your web visitor to install it your web app on other device, let's say your visitor visit your site using desktop pc or laptop for example, so your site will be inform to your web visitor if your site can be install on they device, same when your customer or visitor visit on smartphone mobile, so your site can be install it on smartphone too.. like we develope android or ios app , with PWA we can built all in one website and mobile app with just one development. of course you can select what your favorit framework we can use svelte with sapper or with blazor wasm by microsoft technology , get start now deploy your modern site with progresive web application.`.trim(),
	userId: user.id,
  },
  });

  await prisma.inventori.create({
    data: {
      title: "Headless Online Shop Modern",
      description: "Create new modern headless online shop for new technology static site generator or single page app",
      link: "https://www.fiverr.com/creativitas/design-modern-headless-online-shop-ecommerce-website",
      cover: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/287893471/original/9fcec103901b8260f57c007a50ef7edf9b62fb38/design-modern-headless-online-shop-ecommerce-website.jpg",
      video: "https://www.youtube.com/embed/ub8BqSnCYQg",
      markdown: `This time to migration your e-commerce site or online shop with using headless online shop for best solution optimation your online shop. yeah... we can use headless online shop then integrate with modern technology web development so we can using static site generator like jekyll run on ruby on rails, eleventy 11ty and astro run on node js, or use single page application with react , remix, next,gatsby, angular too... if you want deploy on php hosting so no need wory, because we can use flatfile cms for alternative SSG , we can use bludit , pico or get axcora cms. get start now built and create your modern headless online shop.`.trim(),
	userId: user.id,
  },
  });

  await prisma.inventori.create({
    data: {
      title: "Python Django Website",
      description: "Make your new website with python technology and django framework",
      link: "https://www.fiverr.com/creativitas/design-your-website-with-phyton-django",
      cover: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/232598463/original/f348d631e15c7715517905b9627fdba799293df8/design-your-website-with-phyton-django.png",
      video: "https://www.youtube.com/embed/dgBs87A0uT4",
      markdown: `So if you want a stable website , very functionaly so use python technology is best solutions, no need wory about backend web admin panel, because we can use django framework for make you easy to update content article and others page . Then we have injection auto SEO script so you can focussing on your article only, get started now make dynamic website using python django.`.trim(),
	userId: user.id,
  },
  });

  await prisma.inventori.create({
    data: {
      title: "Flatfile CMS Website",
      description: "Fast website with flatfile cms a static site generator alternative",
      link: "https://www.fiverr.com/creativitas/design-your-website-with-phyton-django",
      cover: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/232598463/original/f6bea94db33cae92e723beeecee3d2ad5e7f56c3/design-your-website-with-phyton-django.jpg",
      video: "https://www.youtube.com/embed/HbcH1WF9AgY",
      markdown: `So if you want to deploy website or blog with your own hosting or use php host like plesk, cpanel, direct admin and others, so you can use our flatfile cms services for make your fast website. so why this technology very fast ?? this is because with using flatfile cms you no need database for installation, or we can use small database like sqlite,with using this scheme so your site is very fast, and this is very important for your site specially for speed and peform. we can use many cms technology and framework like bludit with json files, modx revolutions, pico and others. or you want to use your favorite cms like wordpress ?? no need wory we can help you for develope your site.`.trim(),
	userId: user.id,
  },
  });

  await prisma.inventori.create({
    data: {
      title: "Custom Website SEO",
      description: "Built website full SEO include green score google ligthouse peform",
      link: "https://www.fiverr.com/creativitas/create-your-custom-website-and-app",
      cover: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/262380072/original/da10af56319c1f00ca365b7a0bc60c7dbafbebeb/create-your-custom-website-and-app.jpg",
      video: "https://www.youtube.com/embed/hO9bvToni30",
      markdown: `If you need to built website with full SEO features so you can order our custom website services, we built custom website or blog template themes for you with SEO structure concept, include with optimation for touch green score on google lighthouse, No need wory about your meta tag , and open graph, or twitter card, because we have injection auto SEO script for follow your title and description. Or you need to optimation your site so order our SEO services .`.trim(),
	userId: user.id,
  },
  });

  await prisma.inventori.create({
    data: {
      title: "Mobile Website Design",
      description: "Design your website with unique mobile themes template for smartphone access",
      link: "https://www.fiverr.com/creativitas/create-mobile-website-design-for-you-with-single-page-app",
      cover: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/263422975/original/aa210a34645b04d57f03f73f176e87fce50c17f9/create-mobile-website-design-for-you-with-single-page-app.png",
      video: "https://www.youtube.com/embed/VNIfcmP6Zwk",
      markdown: `And yeah... do you know if many people is use they smartphone for accsess information like search on google for look same information and more... that's why you need to design your website for mobile first , same like android app or ios app, we can built your website using modern technology make your site like mobile application, not just design only but we can implement mobile app using single page application or use progresive website application. or you want to redesign your web with mobile themes template so you can order our mobile web services. get started now with mobile web.`.trim(),
	userId: user.id,
  },
  });

  await prisma.inventori.create({
    data: {
      title: "Restaurant Shop Web App",
      description: "Point of sale application for restaurant cafe and shop store integration website all in one",
      link: "https://www.fiverr.com/creativitas/create-restaurant-cafe-website-integration-pos-app",
      cover: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/286809767/original/ec6a6923be7613bcac48173ce645b75cebe9d955/create-restaurant-cafe-website-integration-pos-app.jpg",
      video: "https://www.youtube.com/embed/KUsp5Rzk9Nc",
      markdown: `If you want to work for your restaurant shop store or cafe so you need point of sale app, for make easy for cashier transaction using point of sale pos app, monitoring inventory + income report and other features, so we have develope a modern web app , yess.. this is a new generation pos app integration with website, you can work with pos app, then you can easy to create your website with your own on content management system, all in one web app integration.`.trim(),
	userId: user.id,
  },
  });

  await prisma.inventori.create({
    data: {
      title: "Android App Development",
      description: "Information for your bussiness with android application mobile web development services",
      link: "https://www.fiverr.com/creativitas/create-android-apk-information",
      cover: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/232283403/original/17c1c955027ac7feba5c126846b310816b1f4723/create-android-apk-information.jpg",
      video: "https://www.youtube.com/embed/hvzjFQ7nvoQ",
      markdown: `Android app is a very important for touch your customer, this is because many people use android OS, same like website android apk information can be displaying about all information about your shop or restaurant bussiness, with modern UI design, include bundle app apk so you can easy share your android app to your friend and customer, of course you can upload it on google playstore, you can use your google developer account for make easy for you to update ttitle and description information about your android app.`.trim(),
	userId: user.id,
  },
  });





  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
