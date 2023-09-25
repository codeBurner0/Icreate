import React, { useEffect, useState } from 'react';
import './Home.css'
import { Card, FormField, Loader } from '../components';
import { robot } from '../assets';

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      data.map((post) => <Card key={post._id} {...post} />)
    );
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/v1/post', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedResults(searchResult);
      }, 500),
    );
  };

  return (
    <section className="max-w-7xl mx-auto mb-12">
      <div >
        <div style={{display:"flex",padding:"50px",paddingLeft:"70px",paddingBottom:"20px"}}>
      <img src={robot} alt="" width="90px"/>
        <h1 data-text="The_Community_Showcase..." id='showcase' className="font-extrabold text-[#222328] text-[32px]" >The_Community_Showcase...</h1>
        </div>
        <header>
          
  <div class="waviy">
   <span style={{"--i":1}}>B</span>
   <span style={{"--i":2}}>R</span>
   <span style={{"--i":3}}>O</span>
   <span style={{"--i":4}}>W</span>
   <span style={{"--i":5}}>S</span>
   <span style={{"--i":6}}>E</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={{"--i":7}}>T</span>
   <span style={{"--i":8}}>H</span>
   <span style={{"--i":9}}>R</span>
   <span style={{"--i":10}}>O</span>
   <span style={{"--i":11}}>U</span>
   <span style={{"--i":12}}>G</span>
   <span style={{"--i":13}}>H</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={{"--i":14}}>A</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={{"--i":15}}>C</span>
   <span style={{"--i":16}}>O</span>
   <span style={{"--i":17}}>L</span>
   <span style={{"--i":18}}>L</span>
   <span style={{"--i":19}}>E</span>
   <span style={{"--i":20}}>C</span>
   <span style={{"--i":21}}>T</span>
   <span style={{"--i":22}}>I</span>
   <span style={{"--i":23}}>O</span>
   <span style={{"--i":24}}>N</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={{"--i":25}}>O</span>
   <span style={{"--i":26}}>F</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={{"--i":27}}>I</span>
   <span style={{"--i":28}}>M</span>
   <span style={{"--i":29}}>A</span>
   <span style={{"--i":30}}>G</span>
   <span style={{"--i":31}}>I</span>
   <span style={{"--i":32}}>N</span>
   <span style={{"--i":33}}>A</span>
   <span style={{"--i":34}}>T</span>
   <span style={{"--i":35}}>I</span>
   <span style={{"--i":36}}>V</span>
   <span style={{"--i":37}}>E</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={{"--i":38}}>A</span>
   <span style={{"--i":39}}>N</span>
   <span style={{"--i":40}}>D</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={{"--i":41}}>V</span>
   <span style={{"--i":42}}>I</span>
   <span style={{"--i":43}}>S</span>
   <span style={{"--i":44}}>U</span>
   <span style={{"--i":45}}>A</span>
   <span style={{"--i":46}}>L</span>
   <span style={{"--i":47}}>L</span>
   <span style={{"--i":48}}>Y</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={{"--i":49}}>S</span>
   <span style={{"--i":50}}>T</span>
   <span style={{"--i":51}}>U</span>
   <span style={{"--i":52}}>N</span>
   <span style={{"--i":53}}>N</span>
   <span style={{"--i":54}}>I</span>
   <span style={{"--i":55}}>N</span>
   <span style={{"--i":56}}>G</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={{"--i":57}}>I</span>
   <span style={{"--i":58}}>M</span>
   <span style={{"--i":59}}>A</span>
   <span style={{"--i":60}}>G</span>
   <span style={{"--i":61}}>E</span>
   <span style={{"--i":64}}>S</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={{"--i":65}}>G</span>
   <span style={{"--i":66}}>E</span>
   <span style={{"--i":67}}>N</span>
   <span style={{"--i":68}}>E</span>
   <span style={{"--i":69}}>R</span>
   <span style={{"--i":70}}>A</span>
   <span style={{"--i":71}}>T</span>
   <span style={{"--i":72}}>E</span>
   <span style={{"--i":73}}>D</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={{"--i":74}}>B</span>
   <span style={{"--i":75}}>Y</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={{"--i":76}}>I</span>
   <span style={{"--i":77}}>C</span>
   <span style={{"--i":78}}>R</span>
   <span style={{"--i":79}}>E</span>
   <span style={{"--i":80}}>A</span>
   <span style={{"--i":81}}>T</span>
   <span style={{"--i":82}}>E</span>
   
   
   
  </div>
  </header>
      </div>

      <div className="mt-12">
        <h1 style={{fontWeight:"700",fontSize:"20px"}}>Search Post</h1>
        <FormField
          
          type="text"
          name="text"
          placeholder="Search something..."
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing Resuls for <span className="text-[#222328]">{searchText}</span>:
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title="No Search Results Found"
                />
              ) : (
                <RenderCards
                  data={allPosts}
                  title="No Posts Yet"
                />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
