During this week, I had to develop a Progressive Web App (PWA).

Here, I will let you know about some awesome pieces of technology that everyone should use to make the web better.
I will not go on the topic "Native is _faster_, _cleaner_, _better_, ...", I will just expose my point of view.

When writing an app, sometimes you don't know about who will use it. So you ask yourself the question "_For which platform should I design my app ?_".

With web, you don't have to ask this question. _Every_ popular device have a _browser_ (even TV !).
You write the app once, and you can use it everywhere, than is very handy (though, you have to make the code/UI "_responsive_", so that it adapts to the platform it's on).
So for my app, I chose not to write a regular web app, but something called a _Progressive Web App_.
The app could be used either on a regular browser or on a mobile device.

# Progressive Web App

According to Google, a PWA is _Reliable_, _Fast_ and _Engaging_.
But what does that means ?

You have three types of connection :

* Connected
* Offline
* Uncertain

With a normal app, fetching data from the browser, when you are connected, it's ok. But when you are not, you just have the browser telling you that you have no network or even worse, infinite loading and white page.

With PWA, things are different. Here are some features :

* Progressive - Work for every user, regardless of browser choice because they're built with progressive enhancement as a core tenet.
* Responsive - Fit any form factor: desktop, mobile, tablet, or forms yet to emerge.
* Connectivity independent - Service workers allow work offline, or on low quality networks.
* App-like - Feel like an app to the user with app-style interactions and navigation.
* Fresh - Always up-to-date thanks to the service worker update process.
* Safe - Served via HTTPS to prevent snooping and ensure content hasn't been tampered with.
* Discoverable - Are identifiable as "applications" thanks to W3C manifests and service worker registration scope allowing search engines to find them.
* Re-engageable - Make re-engagement easy through features like push notifications.
* Installable - Allow users to "keep" apps they find most useful on their home screen without the hassle of an app store.
* Linkable - Easily shared via a URL and do not require complex installation.

(Wikipedia)

<a href='https://www.youtube.com/watch?v=xkme8WFyoXw'><img class='ui fluid rounded image' alt='Add to homescreen gif' src='https://images.frandroid.com/wp-content/uploads/2017/02/progressive-web-app-pwa.gif'></a>

A very interesting part is that you can cache pages (using Service Workers) and datas (using Database) wich means _saving datas on the user device_ to be able to serve them when user is offline. But _not only_!

This is the principle of _offline first_

_First time_ :
1. User connect to website
2. Website is served from server 
3. Website is cached

_Second time_ : 
1. User connect to website 
2. Website load instantly from cache 
3. Website check for new version 
4. Website cache new version 
5. Website ask the user if he wants to reload the page

_Third time_ : 
1. User connect to website 
2. New version of the app is served from cache 
3. Website check for new version
4. and the loop continues...

And this system works whatever the connectivity of the user is because the _offline version_ is served first.

# Service Worker

That's really nice but how do you achieve this kind of cache system ?
Thanks to _Service workers_
They are small pieces of code that _interceps_ browser requests

![Service worker image](https://infrequently.org/14/html5devconf_oct/images/sw_model.png)

Not going too much into details, service workers have _events_ like _fetch_, _install_ or _activate_
On service worker installation, you can cache all website data
Then on fetch event (all single request goes to this function) you can do your check :

```js
on('fetch', page => {
    if (isCached(page)
        return (cachedPage);
    else
        return (pageFromServer);
}
```

You can even do more advanced stuff like, if the page isn't in the cache while fetching it from the server then cache it

# Database

Now, you know how to cache webpages and how to make an offline app
But what about data that you fetch from external websites like _Firebase_ ?
It works the same way but with database
There are several libraries that can help you achieve what you want, but the default one is _indexedDB_
You just have to open your database and get datas inside it :

```js
var request = window.indexedDB.open("MyTestDatabase", 3);

request.onsuccess = function(event) {
  db = event.target.result;
};
```

Now you can use your offline datas and then (if internet connections) fetch new datas, populate again with the new one and also cache them to the database

# Conclusion

I hope PWA have a bright future because I think it's composed of some awesome functionalities
In a world where everyone is on his phone, everywhere in the world, and moving fast an internet connection is not always available and it's very frustrating to not get the content you asked for.
Also performance in web is a great debate. If it's true that going to a browser, search for the website you want then wait for it to load if slower than a native app experience, it tends to be false with progressive web apps since browsers are more and more quick and powerful and cache does a great job in speed improvement.

# References and links

Indexed db : [https://developer.mozilla.org/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB](https://developer.mozilla.org/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)

Google I/O 2016 : [https://www.youtube.com/watch?v=cmGr0RszHc8](https://www.youtube.com/watch?v=cmGr0RszHc8)

Jake Archibald "Service Worker fanatic" :

* Twitter : [https://twitter.com/jaffathecake](https://twitter.com/jaffathecake)
* Github : [https://github.com/jakearchibald](https://github.com/jakearchibald)

Free Udemy course about PWA : [https://www.udacity.com/course/intro-to-progressive-web-apps–ud811](https://www.udacity.com/course/intro-to-progressive-web-apps--ud811)

Service worker introduction : [https://developers.google.com/web/fundamentals/getting-started/primers/service-workers](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers)

Awesome Service Workers : [https://github.com/TalAter/awesome-service-workers](https://github.com/TalAter/awesome-service-workers)

Awesome PWA : [https://github.com/hemanth/awesome-pwa](https://github.com/hemanth/awesome-pwa)
