import React from "react";

export const Profile = ({ profile }) => {
  return (
    <>
      <div class="card mb-3 bg-secondary">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              className="img-fluid rounded-start"
              src={profile.img}
              alt={profile.name}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h1 class="card-title text-light">{profile.name}</h1>
              <p class="card-text text-light">{profile.about}</p>
              <p class="card-text">
                <small class="text-light">{profile.email}</small>
              </p>
              <p class="card-text">
                <small>
                  <a class="text-light" href={profile.linkedin} target="_blank">
                    {profile.linkedin}
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
