// export const Techbook = ({item}) => {
// //   const { title, description } = props;
// //   console.log(x);
//   return (
//     <div className="book">
//       {/* this is a book */}
//       <div className="title">{item.title}</div>
//       <div className="description">{item.description}</div>
//     </div>
//   );
// };

export const Techbook = (props) => {
  //   const { title, description } = props;
  //   console.log(x);
  return (
    <div className="book">
      {/* this is a book */}
      <div className="title">{props.item.title}</div>
      <div className="description">{props.item.description}</div>
    </div>
  );
};
