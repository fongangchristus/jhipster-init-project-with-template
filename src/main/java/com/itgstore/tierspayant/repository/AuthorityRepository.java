package com.itgstore.tierspayant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.itgstore.tierspayant.domain.Authority;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
