import React, { Component } from 'react'
import {Table} from 'react-bootstrap'


const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },       
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];


// Trả về 1 element chứa danh sách các Công ty hoạt động trong lĩnh vực 'Technology':
const filterCategory = companies.filter(company => company.category == 'Technology')

// Trả về 1 element chứa danh sách các Công ty đã ngừng hoạt động trước năm 2010:
const filterEnd = companies.filter(company => company.end < 2010)

export default function Excercise() {
  return (
    <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Start</th>
                    <th>End</th>
                </tr>
            </thead>
            <tbody>
                {companies.map((company)=>(
                    <tr>
                        <td>{company.name}</td>
                        <td>{company.category}</td>
                        <td>{company.start}</td>
                        <td>{company.end}</td>
                    </tr>
                ))}
            </tbody>
        </Table>    
    </div>
  )
}
