'use client'
import React, { useState } from "react";
import { short, medium, long } from "../data/products";
import {
  Input,
  Divider,
  Select,
  SelectItem,
  SelectSection,
  Textarea,
  Button,
  Skeleton
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUserPen,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const MyForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    selectedProducts: [],
    addressDetails: "",
  });

  const handleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };
  const handleProductSelection = (selectedItems) => {
    handleInputChange("selectedProducts", selectedItems);
  };

  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value.replace(/[^\d]/g, "");
    const formattedPhoneNumber = inputPhoneNumber.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "$1-$2-$3"
    );
    setPhoneNumber(formattedPhoneNumber);
    handleInputChange("phoneNumber", formattedPhoneNumber);
  };

  const [isLoaded, setIsLoaded] = useState(true);

  const toggleLoad = () => {
    setIsLoaded(!isLoaded);
  };

  return (
    <div className="mb-5 md:mt-7">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl">ลงทะเบียนรับประกันหญ้าเทียม</h1>
      <form className="flex flex-col gap-y-3 px-10 w-sm max-w-lg mx-auto">
        <Divider className="my-3 md:my-7" />
        <Input
          radius="sm"
          type="text"
          label="กรุณากรอกชื่อ"
          placeholder="ชื่อ"
          labelPla
          cement="outside"
          onChange={(e) => handleInputChange("firstName", e.target.value)}
        />
        <Input
          radius="sm"
          type="text"
          label="กรุณากรอกนามสกุล"
          placeholder="นามสกุล"
          // labelPla
          cement="outside"
          onChange={(e) => handleInputChange("lastName", e.target.value)}
        />
        <Input
          radius="sm"
          type="tel"
          label="กรุณากรอกเบอร์โทรศัพท์"
          placeholder="098-888-8888"
          labelPla
          cement="outside"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          maxLength={12}
        />
        <Input
          radius="sm"
          type="email"
          label="Email"
          placeholder="you@example.com"
          labelPla
          cement="outside"
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        <Select
          radius="sm"
          //isRequired
          label="เลือกรุ่นสินค้า"
          placeholder="เลือกรุ่นสินค้า"
          selectionMode="multiple"
          onChange={(selectedItems) => handleProductSelection(selectedItems)}
        >
          <SelectSection showDivider title="1CM">
            {short.map((item) => (
              <SelectItem key={item.value}>{item.label}</SelectItem>
            ))}
          </SelectSection>
          <SelectSection showDivider title="2CM">
            {medium.map((item) => (
              <SelectItem key={item.value}>{item.label}</SelectItem>
            ))}
          </SelectSection>
          <SelectSection title="3CM - 3.5CM">
            {long.map((item) => (
              <SelectItem key={item.value}>{item.label}</SelectItem>
            ))}
          </SelectSection>
        </Select>
        <Textarea
          radius="sm"
          label="รายละเอียดที่อยู่"
          placeholder="โปรดใส่รายละเอียดที่อยู่ เช่น 88/99 ถ.ตัวอย่าง จ.ตัวอย่าง รหัสไปรษณีย์ 20130"
          onChange={(e) => handleInputChange("addressDetails", e.target.value)}
        />
        <Divider className="mt-3" />
        <Summary formData={formData} />
        <Divider className="mt-3" />
        <p className="text-center text-sm lg:text-lg">*โปรดตรวจสอบข้อมูลให้ถูกต้องก่อนยืนยัน</p>
        <ButtonGroup isLoaded={isLoaded} toggleLoad={toggleLoad} />
      </form>
    </div>
  );
};

const Summary = ({ formData }) => {
  return (
    <div className="mt-3">
      <h2 className="text-center text-2xl mb-2">สรุปข้อมูลที่กรอก</h2>
      <div className="flex flex-col">
        <p className="font-normal">ชื่อ: {formData.firstName} {formData.lastName}</p>
        <p className="font-normal">เบอร์โทรศัพท์: {formData.phoneNumber}</p>
        <p className="font-normal">Email: {formData.email}</p>
        {/* <p className="font-normal">รุ่นสินค้าที่เลือก: {selectedProductLabels.join(", ")}</p> */}
        <p className="font-normal">รายละเอียดที่อยู่: {formData.addressDetails}</p>
      </div>
    </div>
  );
};


const ButtonGroup = ({ isLoaded, toggleLoad }) => (
  <div className="flex flex-col md:flex-row gap-2 justify-around">
    <Skeleton isLoaded={isLoaded} className="rounded-md">
      <Button color="danger" variant="ghost" radius="sm" className="w-full md:w-48 opacity-50">
        ยกเลิก
      </Button>
    </Skeleton>
    <Skeleton isLoaded={isLoaded} className="rounded-md">
      <Button color="primary" radius="sm" className="w-full md:w-48" type="submit" onPress={toggleLoad}>
        ยืนยัน
      </Button>
    </Skeleton>
  </div>
);
