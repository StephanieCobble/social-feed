//to display list item (li)
//create the feed where all your posts will be displayed in your app. 
//All posts should be passed into this component using props. Then, utilize the “map” 
//higher order array method to map each post to its own Post component.


const DisplayPosts = (props) => {
    return ( 
        <table className="table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Post Body</th>
            <th>Like Button</th>
            <th>Dislike Button</th>
          </tr>
        </thead>
        <tbody>
          {props.parentPosts.map((post, index) => {
            return (
            <tr key={index}>
            <td>{index+1}</td>
            <td>{post.name}</td>
            <td>{post.post}</td>
            </tr>
            );
            })}  
        </tbody>
      </table>
    );
} 
export default DisplayPosts;