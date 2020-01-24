import React, {
  useState,
  useTransition,
  Suspense,
  useEffect
} from "react";
// import debounce from 'lodash.debounce';
import { fetchProfileData } from "./fakeApi";
import Calendar from 'react-calendar';

function getNextId(id) {
  return id === 3 ? 0 : id + 1;
}

const d = new Date();
const initialResource = fetchProfileData(0, new Date(d.getTime() - (d.getTimezoneOffset() * 60000 )).toISOString().split("T")[0]);



function App() {
  const [resource, setResource] = useState(
    initialResource
  );
  const [curDate, setCurDate] = useState(new Date());
  const [
    startTransition,
    isPending
  ] = useTransition({
    timeoutMs: 3000
  });
  const onChange = (e) => {
    const value = e.target.value;
    // debounce(() => {
      startTransition(() => {
        console.log('fetch--------')
        setResource(
          fetchProfileData(0, value)
        );
      });
    // }, 300)
  }
  const onChangeDate = (date) => {
    console.log(date);
    const formatedDay = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];
    setCurDate(date)
    startTransition(() => {
      console.log('fetch--------')
      setResource(
        fetchProfileData(0, formatedDay)
      );
    });
  }
  return (
    <>
      <ProfilePage resource={resource} />
      <Calendar
        onChange={onChangeDate}
        value={curDate}
        className="calendar"
      />
      {/* <input onChange={onChange}/>
      <button
        disabled={isPending}
        onClick={() => {
          startTransition(() => {
            const nextUserId = getNextId(
              resource.userId
            );
            setResource(
              fetchProfileData(nextUserId)
            );
          });
        }}
      >
        Next
      </button>
      {isPending ? " Loading..." : null} */}
    </>
  );
}

function ProfilePage({ resource }) {
  return (
    <Suspense
      fallback={<h1>Loading profile...</h1>}
    >
      <ProfileDetails resource={resource} />
      {/* <Suspense
        fallback={<h1>Loading posts...</h1>}
      >
        <ProfileTimeline resource={resource} />
      </Suspense> */}
    </Suspense>
  );
}

const ProfileDetails = React.memo(({ resource }) => {
  const user = resource.user.read();
  console.log(user);
  return (
    <>
      {user.url && <div className="image-wrapper">
        <img
          className="image"
          src={user.url}
          alt='dsadas'
          onLoad={() => {console.log('onLoad')}}
          onError={() => {console.log('onError')}}
        />
        </div>}
      {/* {countResult ? result.map(({ title, platform }, i) => (
        <div key={title + i}>
          <p>Title: {title}</p>
          <span>platform: {platform}</span>
        </div>
      )) : (<p>{result}</p>)} */}
    </>
  );
});

// function ProfileDetails({ resource }) {
//   const array = resource.user.read();
//   console.log(array)
//   return (
//     <>
//       {array.result.map(({ title, platform }, i) => (
//         <div key={title + i}>
//           <p>Title: {title}</p>
//           <span>platform: {platform}</span>
//         </div>
//       ))}
//     </>
//   );
// }

function ProfileTimeline({ resource }) {
  const posts = resource.posts.read();
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}

export default App;
