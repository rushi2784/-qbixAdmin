import { ThemeProvider } from "./context/Themes";
import { LoaderProvider } from "./context/Preloader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Avatars, Alerts, Buttons, Charts, Tables, Fields, Headings, Colors } from "./pages/blocks";
import {
    Ecommerce, ForgotPassword, Register, Login, UserList, UserProfile, MyAccount,
    ProductList, ProductView, ProductUpload, InvoiceList, InvoiceDetails, OrderList, Message,
    Notification, BlankPage, Settings
} from "./pages/master";
import EditProduct from "./pages/master/EditProduct";
import ProductVariable from "./pages/master/ProductVariable";
import UpdateOrder from "./pages/master/UpdateOrder";
import SliderImage from "./pages/master/SliderImage";
import UpdateSliderImg from "./pages/master/UpdateSliderImg";
import AddSliderImg from "./pages/master/AddSliderImg";
import CountryList from "./pages/master/CountryList";
import EditCountry from "./pages/master/EditCountry";

export default function App() {
    return (
        <ThemeProvider>

            <BrowserRouter>
                <Routes>
                    {/* master Pages */}
                    <Route path="/" element={<Ecommerce />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />

                    <Route path="/user-list" element={<UserList />} />
                    <Route path="/user-profile:id" element={<UserProfile />} />

                    <Route path="/my-account" element={<MyAccount />} />

                    <Route path="/product-list" element={<ProductList />} />
                    <Route path="/product-view:id" element={<ProductView />} />
                    <Route path="/product-edit:id" element={<EditProduct />} />
                    <Route path="/product-variable:id" element={<ProductVariable />} />
                    <Route path="/product-upload" element={<ProductUpload />} />

                    <Route path="/invoice-list" element={<InvoiceList />} />
                    <Route path="/invoice-details:id" element={<InvoiceDetails />} />

                    <Route path="/order-list" element={<OrderList />} />
                    <Route path="/order:id" element={<UpdateOrder />} />

                    <Route path="/slider_img" element={<SliderImage />} />
                    <Route path="/slider_img_edit:id" element={<UpdateSliderImg />} />
                    <Route path="/slider_img_add" element={<AddSliderImg />} />

                    <Route path="/country" element={<CountryList />} />
                    <Route path="/country_edit:id" element={<EditCountry />} />

                    <Route path="/message" element={<Message />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/blank-page" element={<BlankPage />} />

                    {/* Blocks Pages */}
                    <Route path="/headings" element={<Headings />} />
                    <Route path="/buttons" element={<Buttons />} />
                    <Route path="/avatars" element={<Avatars />} />
                    <Route path="/colors" element={<Colors />} />
                    <Route path="/charts" element={<Charts />} />
                    <Route path="/tables" element={<Tables />} />
                    <Route path="/fields" element={<Fields />} />
                    <Route path="/alerts" element={<Alerts />} />


                </Routes>
            </BrowserRouter>

        </ThemeProvider>
    );
}

