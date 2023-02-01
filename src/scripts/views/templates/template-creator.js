/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
    <article class="item" tabindex="0" >
    <div class="pictureRating">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name} restaurant">
        <div class="rating">
        <i class="fa-solid fa-star"></i>&nbsp; ${restaurant.rating}
        </div>
    </div>
    <h4>
        ${restaurant.name}
    </h4>
    <p>
        <i class="fa-solid fa-location-dot"></i> ${restaurant.city}
    </p>
    <a href="/#/detail/${restaurant.id}" id="${restaurant.id}" class="btnMenu">DETAIL</a>
    </article>
`;

// const createDetailRestaurantReviewsTemplate = (reviews) => {
//   let reviewItem = '';
//   reviews.forEach((review) => {
//     reviewItem += `
//         <div class="reviewItem">
//             <h2 class="reviewerName"> ${review.name} </h2>
//             <p class="review">
//                 ${review.review}
//             </p>
//             <p class="reviewDate">
//                 ${review.date}
//             </p>
//         </div>
//     `;
//   });

//   return reviewItem;
// };

const createDetailRestaurantReviewTemplate = (review) => {
  const reviewItem = `
    <div class="reviewItem">
        <h2 class="reviewerName"> ${review.name} </h2>
        <p class="review">
            ${review.review}
        </p>
        <p class="reviewDate">
            ${review.date}
        </p>
    </div>
  `;

  return reviewItem;
};

const createRestaurantDetail = (restaurant) => `
    <div class="pictureRating">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="picture">
        <div class="rating">
            <i class="fa-solid fa-star"></i>&nbsp; ${restaurant.rating}
        </div>
    </div>
    <div class="restaurantInfo">
        <h1 class="restaurantName">${restaurant.name}</h1>
        <p class="restaurantAddress"> <i class="fa-solid fa-location-dot"></i> ${restaurant.city}, ${restaurant.address}</p>
        <restaurant-categories></restaurant-categories>
    </div>
    <div class="restaurantContentWrapper">
        <div class="contentNavigation">
            <button class="contentNavItem menuButton active" id="menu">Menu</button>
            <button class="contentNavItem descriptionButton" id="description">Description</button>
            <button class="contentNavItem reviewsButton" id="reviews">Reviews</button>
        </div>
        <div class="restaurantContent restaurantMenu">
          <restaurant-menu class="menus foodsMenu"></restaurant-menu>
          <restaurant-menu class="menus drinksMenu"></restaurant-menu>
        </div>
        <div class="restaurantContent restaurantDescription">
            <p class="description">
              ${restaurant.description}
            </p>
        </div>
        <div class="restaurantContent restaurantReviews">
            
            <div class="reviewItemWrapper">
              <review-list></review-list>
            </div>
            <div class="writeReview">
                <h3>Write your review here!</h3>
                <form id="formSubmit" method="POST">
                    <div class="nameForm">
                        <label for="name">Your Name</label>
                        <input id="name" type="text"> 
                    </div>
                    <div class="reviewForm">
                        <label for="reviewText">Review</label>
                        <textarea name="reviewText" id="reviewText" cols="30" rows="10"></textarea> 
                    </div>
                    <button type="submit" class="btnSubmitReview">Submit</button>
                </form>
            </div>
        </div>
    </div>
`;

const createLikeButtonTemplate = (className) => `
    <button class="likeBtn ${className}">
        <i class="fa-solid fa-heart favorited"></i> 
    </button>
`;

export {
  createRestaurantDetail,
  createRestaurantItemTemplate,
  createDetailRestaurantReviewTemplate,
  createLikeButtonTemplate,
};
