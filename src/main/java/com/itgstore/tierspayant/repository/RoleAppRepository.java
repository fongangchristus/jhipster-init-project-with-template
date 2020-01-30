package com.itgstore.tierspayant.repository;

import org.springframework.stereotype.Repository;

import com.itgstore.tierspayant.domain.RoleApp;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the PgwRoleApp entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RoleAppRepository extends JpaRepository<RoleApp, Long>, JpaSpecificationExecutor<RoleApp> {
	RoleApp findOneByLibelle(String libelle);
}
