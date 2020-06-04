import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { GeneralInfoComponent } from './general-info/general-info.component';
import { EducationComponent } from './education/education.component';
import { InternshipsComponent } from './internships/internships.component';
import { ProjectsComponent } from './projects/projects.component';
import { InterestsComponent } from './interests/interests.component';
import { SkillsComponent } from './skills/skills.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { CertificationComponent } from './certification/certification.component';
import { AchievementsComponent } from './achievements/achievements.component';

const routes: Routes = [
  {
    path: "",
    component: GeneralInfoComponent
  }
];

@NgModule({
  declarations: [GeneralInfoComponent, EducationComponent, InternshipsComponent, ProjectsComponent, InterestsComponent, SkillsComponent, DeclarationComponent, CertificationComponent, AchievementsComponent],
  entryComponents: [
    //GeneralInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BuilderModule { }
