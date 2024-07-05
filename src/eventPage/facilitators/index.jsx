import React from "react";
import "./style.scss";
import {
  dallin,
  huda,
  mahrukh,
  melissa,
  talai,
  tannaz,
} from "../../assets/images/images";

const Facilitators = () => {
  return (
    <section className="facilitators-section" id="facilitators">
      <h2>OUR Facilitators</h2>
      <div className="wrapper">
        <div className="facilitator-cards">
          <div className="card">
            <div className="img">
              <img src={mahrukh} alt="img" />
            </div>
            <div className="info">
              <h4>Mahrukh Ahmad</h4>
              <p>
                Mahrukh, born and raised in Lahore, Pakistan, now residing in
                Northern Virginia, is an E-RYT 500 Yoga Instructor specializing
                in Ashtanga, Vinyasa, Yin and Power Flow.
              </p>
              <p>
                She uses intention, meditation, pranayama and asanas to promote
                true inner peace, gratitude, empowerment and self-love. Her
                students leave each class feeling motivated, refreshed and
                renewed.
              </p>
              <p>
                She teaches in a way that respects diversity and provokes
                thought and meaning, letting the students experience for
                themselves.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={talai} alt="img" />
            </div>
            <div className="info">
              <h4>Talai Sera Johansen</h4>
              <p>
                Talai was originally born in Suva, Fiji. She is a certified
                500-hour yoga instructor and has over 1,000 teaching hours.
              </p>
              <p>
                She is passionate about teaching yoga and believes that yoga is
                for everybody, every stage, and every phase of life. She
                believes that yoga has the ability to teach you to be more
                present and awake during any circumstance.
              </p>
              <p>
                In her spare time, she enjoys building furniture, reading and
                spending time with her family and friends.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={tannaz} alt="img" />
            </div>
            <div className="info">
              <h4>Dr. Tannaz Mancini</h4>
              <p>
                Dr. Tannaz Mancini is a licensed Chiropractor with six years of
                experience, specializing in sports medicine. In addition to her
                chiropractic skills, she has recently ventured into the field of
                cosmetic acupuncture, offering innovative treatments for
                aesthetic enhancement.
              </p>
              <p>
                She provides a variety of services, including dry needling and
                spinal adjustments, to address her patients' diverse needs. As a
                certified yoga teacher, she integrates her knowledge of movement
                and alignment into her practice, promoting holistic health and
                wellness.
              </p>
            </div>
          </div>
        </div>
        <div className="facilitator-cards">
          <div className="card">
            <div className="img">
              <img src={melissa} alt="img" />
            </div>
            <div className="info">
              <h4>Melissa Christopher Green</h4>
              <p>
                Melissa Christopher Green is a highly experienced yoga
                instructor certified as an E-RYT-500 and YACEP by Yoga Alliance.
                Specializing in Ashtanga.
              </p>
              <p>
                Melissa's teaching is holistic and transformative, integrating
                breath, movement, and mindfulness. She has led traditional yoga
                classes, paddle board yoga, kids yoga, and numerous teacher
                training workshops and retreats. Her classes are known for being
                challenging yet supportive, helping students discover their
                inner strength and potential​​.
              </p>
            </div>
          </div>
          <h3>
            Guests <br /> Facilitators
          </h3>
          <div className="card">
            <div className="img">
              <img src={dallin} alt="img" />
            </div>
            <div className="info">
              <h4>Dallin Bruun</h4>
              <p>
                Dallin Bruun is a practicing Marriage and Family Therapist (MFT)
                in Utah, specializing in trauma, self-compassion, mindfulness,
                and psychedelic-assisted therapy.
              </p>
              <p>
                His initial career focused on entrepreneurship, starting and
                managing two successful startups. But as stress began
                compromising his mental and physical wellness, he enrolled in a
                mindfulness-based stress reduction course (MBSR).
              </p>
              <p>
                Through mindfulness practice and therapy, he recognized many of
                his beliefs and life-goals were causing more stress than
                happiness.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={huda} alt="img" />
            </div>
            <div className="info">
              <h4>Huda Ahmad</h4>
              <p>
                Meet Chef Huda Ahmed, our in-house retreat chef with a heritage
                rooted in the rich culinary traditions of India and Pakistan.
              </p>
              <p>
                Huda offers a diverse and flexible menu that caters to various
                preferences, blending traditional culinary styles with fusion
                and modern techniques.
              </p>
              <p>
                Whether crafting a sumptuous feast or a simple, healthful dish,
                Huda's culinary creations are infused with love and expertise,
                making every meal a delightful journey for your taste buds. Join
                us in savoring the exquisite flavors of Chef Huda's cuisine
                during our retreats, where each bite is a testament to her
                culinary artistry and dedication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilitators;
