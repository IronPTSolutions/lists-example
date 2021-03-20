import React, { Component } from 'react'
import data from '../data/students.json'
import AlbumItem from './AlbumItem'
import Button from './Button'

class Album extends Component {
  state = {
    students: [...data],
    search: '',
    gender: null
  }

  deleteItem = (studentId) => {
    this.setState({
      students: this.state.students.filter(student => student.id !== studentId)
    })
  }

  onSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  filterStudents = () => {
    let students = [...this.state.students]
    if (this.state.search) {
      students = this.state.students.filter(({ name }) => name.toLowerCase().includes(this.state.search))
    }
    if (this.state.gender) {
      students = this.state.students.filter(({ gender }) => gender === this.state.gender)
    }

    return students
  }
  
  onGender = (gender) => {
    this.setState((prevState => {
      return {
        gender: prevState.gender === gender ? null : gender
      }
    }))
  }

  render() {
    const students = this.filterStudents()

    return (
      <section className="Album bg-light py-5">
        <div className="container">
          <div className="mx-auto mt-5 mb-3" style={{ maxWidth: '18rem' }}>
            <input
              placeholder="Type for searching..." type="text"
              className="form-control" onChange={this.onSearch}
            />
          </div>

          <div className="btn-group mb-5">
            <Button
              onClick={() => this.onGender('female')}
              active={this.state.gender === 'female'}
            >
              Girls
            </Button>

            <Button
              onClick={() => this.onGender('male')}
              active={this.state.gender === 'male'}
            >
              Boys
            </Button>
          </div>

            {students.length ? (
              <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3">
                {students.map(student => (
                  <div className="col" key={student.id}>
                    <AlbumItem {...student} onDelete={() => this.deleteItem(student.id)} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center">There are not results with this parameters :(</p>
            )}
        </div>
      </section>
    )
  }
}

export default Album