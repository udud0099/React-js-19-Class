import Card from "./Card";

const AllCard = () => {
  return (
    <>
      <Card
        imgSrc="https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imgAlt="dog 1"
        dogName="1"
        rate={1000}
        weiht={7}
      />
      <Card
        imgSrc="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8MHwwfHx8MA%3D%3D"
        imgAlt="dog 2"
        dogName="dog 2"
      />
      <Card
        imgSrc="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8MHwwfHx8MA%3D%3D"
        imgAlt="dog 3"
        dogName="dog 3"
        weiht={4}
        rate={1400}
      />
      <Card
        imgSrc="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nfGVufDB8MHwwfHx8MA%3D%3D"
        imgAlt="dog 4"
        dogName="dog 4"
        rate={5000}
        weiht={2}
      />
      <Card
        imgSrc="https://images.unsplash.com/photo-1597633425046-08f5110420b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfDB8MHx8fDA%3D"
        imgAlt="dog 5"
        dogName="dog 5"
        rate={6000}
        weiht={4}
      />
      <Card
        imgSrc="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3xlbnwwfDB8MHx8fDA%3D"
        imgAlt="dog 6"
        dogName="dog 6"
        rate={12000}
        weiht={8}
      />
      <Card
        imgSrc="https://images.unsplash.com/photo-1534361960057-19889db9621e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ3xlbnwwfDB8MHx8fDA%3D"
        imgAlt="dog 7"
        dogName="dog 7"
        rate={19000}
        weiht={12}
      />
    </>
  );
};

export default AllCard;
