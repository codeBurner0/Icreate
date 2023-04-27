import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch('http://localhost:8080/api/v1/dalle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please provide proper prompt');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...form }),
        });

        await response.json();
        navigate('/');
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please generate an image with proper details');
    }
  };

  return (
    <section className="max-w-7xl mx-auto" id='section'>
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Generate an imaginative image through ICREATE AI and share it with the community</p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Ex., john doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            { form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">** Once you have created the image you want, you can share it with others in the community **</p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? 'Sharing...' : 'Share with the Community'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;









{/* <header>
  <div class="waviy">
  <span style={{"--i":1}}>G</span>
   <span style={{"--i":2}}>E</span>
   <span style={{"--i":3}}>N</span>
   <span style={{"--i":4}}>E</span>
   <span style={{"--i":5}}>R</span>
   <span style={{"--i":6}}>A</span>
   <span style={{"--i":7}}>T</span>
   <span style={{"--i":8}}>E</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={{"--i":38}}>A</span>
   <span style={{"--i":39}}>N</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
   <span style={{"--i":57}}>I</span>
   <span style={{"--i":58}}>M</span>
   <span style={{"--i":59}}>A</span>
   <span style={{"--i":60}}>G</span>
   <span style={{"--i":61}}>E</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={{"--i":62}}>T</span>
   <span style={{"--i":63}}>H</span>
   <span style={{"--i":64}}>R</span>
   <span style={{"--i":65}}>O</span>
   <span style={{"--i":66}}>U</span>
   <span style={{"--i":67}}>G</span>
   <span style={{"--i":68}}>H</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={{"--i":76}}>I</span>
   <span style={{"--i":77}}>C</span>
   <span style={{"--i":78}}>R</span>
   <span style={{"--i":79}}>E</span>
   <span style={{"--i":80}}>A</span>
   <span style={{"--i":81}}>T</span>
   <span style={{"--i":82}}>E</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={{"--i":84}}>A</span>
   <span style={{"--i":85}}>N</span>
   <span style={{"--i":86}}>D</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <br />
   <span style={{"--i":91}}>S</span>
   <span style={{"--i":87}}>H</span>
   <span style={{"--i":88}}>A</span>
   <span style={{"--i":89}}>R</span>
   <span style={{"--i":90}}>E</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={{"--i":99}}>W</span>
   <span style={{"--i":92}}>I</span>
   <span style={{"--i":93}}>T</span>
   <span style={{"--i":94}}>H</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={{"--i":95}}>Y</span>
   <span style={{"--i":96}}>O</span>
   <span style={{"--i":97}}>U</span>
   <span style={{"--i":98}}>R</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span style={{"--i":99}}>C</span>
   <span style={{"--i":100}}>O</span>
   <span style={{"--i":101}}>M</span>
   <span style={{"--i":102}}>M</span>
   <span style={{"--i":103}}>U</span>
   <span style={{"--i":104}}>N</span>
   <span style={{"--i":105}}>I</span>
   <span style={{"--i":106}}>T</span>
   <span style={{"--i":107}}>Y</span>
  </div>
  </header> */}